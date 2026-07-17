import { supabase } from "./supabase.js";

window.uploadFile = async function () {

    const input = document.getElementById("photoInput");

    if (!input.files.length) {

        alert("لطفاً یک عکس یا ویدیو انتخاب کن.");

        return;

    }

    const file = input.files[0];

    const fileName = Date.now() + "_" + file.name;

    document.getElementById("status").innerHTML =
    "در حال ارسال...";

    const { error } = await supabase.storage

        .from("uploads")

        .upload(fileName, file);

    if (error) {

        console.log(error);

        document.getElementById("status").innerHTML =
        "❌ خطا در ارسال";

        return;

    }

    document.getElementById("status").innerHTML =
    "✅ با موفقیت ارسال شد.";

    input.value = "";

}