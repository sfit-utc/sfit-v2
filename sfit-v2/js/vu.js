document.addEventListener("DOMContentLoaded", function () {
    const events = [
        {
            title: "SỰ KIỆN 20/10/2024",
            desc: "Sự kiện tôn vinh phụ nữ Việt Nam. Cùng nhau tham gia và chia sẻ yêu thương.",
            img: "./assets/images/vu-activities/8-3-0.webp",
            link: "https://www.facebook.com/sfit2016",
        },
        {
            title: "SỰ KIỆN 11/11/2024",
            desc: "Chào mừng ngày độc thân với nhiều hoạt động vui nhộn và quà tặng hấp dẫn!",
            img: "./assets/images/vu-activities/8-3-0.webp",
            link: "https://www.facebook.com/sfit2016",
        },
        {
            title: "SỰ KIỆN 25/12/2024",
            desc: "Giáng sinh ngập tràn yêu thương! Cùng tham gia lễ hội đặc biệt mùa Noel.",
            img: "./assets/images/vu-activities/8-3-0.webp",
            link: "https://www.facebook.com/sfit2016",
        },
    ];

    let current = 0;

    const titleEl = document.getElementById("vu-event-title");
    const descEl = document.getElementById("vu-event-desc");
    const imgEl = document.getElementById("vu-event-img");
    const linkEl = document.getElementById("vu-event-link");
    const dotsEl = document.getElementById("vu-dots");

    function render() {
        const event = events[current];

        titleEl.textContent = event.title;
        descEl.textContent = event.desc;
        imgEl.src = event.img;
        linkEl.href = event.link;

        dotsEl.innerHTML = "";

        events.forEach((_, index) => {
            const dot = document.createElement("span");
            dot.classList.add("dot");
            if (index === current) {
                dot.classList.add("active");
            }

            dot.addEventListener("click", () => {
                current = index;
                render();
            });

            dotsEl.appendChild(dot);
        });
    }

    render();
});
