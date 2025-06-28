import { 
  collection, 
  addDoc, 
  query, 
  where, 
  getDocs, 
  serverTimestamp,
  Timestamp 
} from 'firebase/firestore';
import { db } from './firebase';

export interface WaitlistEntry {
  id?: string;
  email: string;
  name?: string;
  company?: string;
  source: 'registro' | 'login' | 'prueba-gratis';
  createdAt?: Timestamp;
  metadata?: {
    userAgent?: string;
    referrer?: string;
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
  };
}

export class WaitlistService {
  private static COLLECTION_NAME = 'waitlist';

  /**
   * Agrega un usuario a la lista de espera
   */
  static async addToWaitlist(entry: WaitlistEntry): Promise<{ success: boolean; id?: string; error?: string }> {
    try {
      // Verificar si el email ya existe
      const exists = await this.emailExists(entry.email);
      if (exists) {
        return { 
          success: false, 
          error: 'Este email ya está registrado en la lista de espera' 
        };
      }

      // Agregar timestamp del servidor
      const entryWithTimestamp = {
        ...entry,
        createdAt: serverTimestamp(),
        email: entry.email.toLowerCase().trim()
      };

      // Agregar a Firestore
      const docRef = await addDoc(
        collection(db, this.COLLECTION_NAME), 
        entryWithTimestamp
      );

      return { 
        success: true, 
        id: docRef.id 
      };
    } catch (error) {
      console.error('Error al agregar a la lista de espera:', error);
      return { 
        success: false, 
        error: 'Error al procesar la solicitud. Por favor, intenta nuevamente.' 
      };
    }
  }

  /**
   * Verifica si un email ya está registrado
   */
  static async emailExists(email: string): Promise<boolean> {
    try {
      const normalizedEmail = email.toLowerCase().trim();
      const q = query(
        collection(db, this.COLLECTION_NAME),
        where('email', '==', normalizedEmail)
      );
      
      const querySnapshot = await getDocs(q);
      return !querySnapshot.empty;
    } catch (error) {
      console.error('Error al verificar email:', error);
      return false;
    }
  }

  /**
   * Obtiene todos los registros de la lista de espera (para admin)
   */
  static async getAllEntries(): Promise<WaitlistEntry[]> {
    try {
      const querySnapshot = await getDocs(collection(db, this.COLLECTION_NAME));
      const entries: WaitlistEntry[] = [];
      
      querySnapshot.forEach((doc) => {
        entries.push({ id: doc.id, ...doc.data() } as WaitlistEntry);
      });
      
      return entries;
    } catch (error) {
      console.error('Error al obtener entradas:', error);
      return [];
    }
  }

  /**
   * Obtiene estadísticas de la lista de espera
   */
  static async getStats(): Promise<{
    total: number;
    bySource: Record<string, number>;
    todayCount: number;
  }> {
    try {
      const entries = await this.getAllEntries();
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      const stats = {
        total: entries.length,
        bySource: {} as Record<string, number>,
        todayCount: 0
      };

      entries.forEach(entry => {
        // Contar por fuente
        if (entry.source) {
          stats.bySource[entry.source] = (stats.bySource[entry.source] || 0) + 1;
        }
        
        // Contar registros de hoy
        if (entry.createdAt && entry.createdAt.toDate() >= today) {
          stats.todayCount++;
        }
      });

      return stats;
    } catch (error) {
      console.error('Error al obtener estadísticas:', error);
      return {
        total: 0,
        bySource: {},
        todayCount: 0
      };
    }
  }
}