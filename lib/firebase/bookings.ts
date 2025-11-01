import {
  collection,
  addDoc,
  serverTimestamp,
  Timestamp,
} from 'firebase/firestore';
import { db } from './config';

export interface BookingData {
  name: string;
  phone: string;
  address: string;
  packageName: string;
  date: string;
  time: string;
  notes?: string;
}

export interface Booking extends BookingData {
  id: string;
  createdAt: Timestamp;
  status: string;
}

export async function createBooking(bookingData: BookingData): Promise<{ success: boolean; error?: string; id?: string }> {
  try {
    const bookingsRef = collection(db, 'bookings');

    const docRef = await addDoc(bookingsRef, {
      ...bookingData,
      status: 'pending',
      createdAt: serverTimestamp(),
    });

    return {
      success: true,
      id: docRef.id,
    };
  } catch (error) {
    console.error('Error creating booking:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'حدث خطأ أثناء إنشاء الحجز',
    };
  }
}
