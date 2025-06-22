import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kkhlrtxvtojjuypfjizr.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtraGxydHh2dG9qanV5cGZqaXpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA1MjEzMTMsImV4cCI6MjA2NjA5NzMxM30.aAtE5AJr1Fp_Jy5vRxeJHTurxSSR-40FXt9dEdju0rI';
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
