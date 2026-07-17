import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const supabaseUrl = "https://tfpoybiwsritiwsplyyu.supabase.co";

const supabaseKey = "sb_publishable_UCb1udtIPB-2t4yOkazUYg_KjdPxZih";

export const supabase = createClient(
    supabaseUrl,
    supabaseKey
);