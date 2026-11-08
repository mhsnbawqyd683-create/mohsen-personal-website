 غيّر الرقم هنا إذا أردت تحديث رقم واتساب.///
const whatsappNumber = "967779563062";

document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll(".order-button").forEach((button) => {
  button.addEventListener("click", () => {
    const service = button.dataset.service;
    const message = `مرحباً، أرغب بالاستفسار عن خدمة: ${service}. أرجو إرسال التفاصيل والتكلفة.`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener");
  });
});

document.getElementById("contactButton").href = `https://wa.me/${whatsappNumber}`


function orderService(serviceName) {
    const phone = "967779563062";

    const message = "السلام عليكم، أريد طلب خدمة: " + serviceName;

    const whatsappURL =
        "https://wa.me/" + phone +
        "?text=" + encodeURIComponent(message);

    window.location.href = whatsappURL;
}
