// Importando via CDN para não precisar de Node.js instalado localmente
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// SUBSTITUA COM SUAS CHAVES DO SUPABASE (Configurações -> API)
const supabaseUrl = 'https://ptxvudozgamnoapywclo.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB0eHZ1ZG96Z2Ftbm9hcHl3Y2xvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYwOTA2MTUsImV4cCI6MjA4MTY2NjYxNX0.oNWlHaWj6_pgar7olXaanpIcSxk2XZ_Ghj8r7ozdGKo'


export const supabase = createClient(supabaseUrl, supabaseKey)
