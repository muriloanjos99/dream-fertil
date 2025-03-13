import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bayjirisregnhwxlaprk.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJheWppcmlzcmVnbmh3eGxhcHJrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE3MzEyMjUsImV4cCI6MjA1NzMwNzIyNX0.eEOtW1kcjB02-xIdSl7v_OSpDnKlJbfuzmotkEXTRnE';

export const supabase = createClient(supabaseUrl, supabaseKey);