import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://dbdeafezqfmqivdkyxzs.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRiZGVhZmV6cWZtcWl2ZGt5eHpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg2NDM3NDEsImV4cCI6MjEwNDIxOTc0MX0.ERGN5Z1VHWZWvBLZ3XIFmFVC_hrLOAB09racng-qRCU'

export const supabase = createClient(supabaseUrl, supabaseKey)