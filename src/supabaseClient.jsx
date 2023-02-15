import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://fkldvjtthfqmoruvwqki.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZrbGR2anR0aGZxbW9ydXZ3cWtpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzYzOTU0MzgsImV4cCI6MTk5MTk3MTQzOH0.r49wHkEkmLmO8RGglMp4Tw1m2Yhq8KJ1jySYzLABHDE"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)