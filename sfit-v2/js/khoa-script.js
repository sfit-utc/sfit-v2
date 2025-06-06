document.addEventListener('DOMContentLoaded', () => {
    const cacMucBan = document.querySelectorAll('.khoa-muc-ban');

    cacMucBan.forEach(item => {
        const nutMo = item.querySelector('.khoa-nut-mo-ban');
        const chiTiet = item.querySelector('.khoa-chi-tiet-ban');

        if (nutMo && chiTiet) {
            nutMo.addEventListener('click', () => {
                const dangMo = chiTiet.classList.contains('active');

                cacMucBan.forEach(mucKhac => {
                    if (mucKhac !== item) {
                        const chiTietKhac = mucKhac.querySelector('.khoa-chi-tiet-ban');
                        const nutMoKhac = mucKhac.querySelector('.khoa-nut-mo-ban');

                        if (chiTietKhac && chiTietKhac.classList.contains('active')) {
                            chiTietKhac.classList.remove('active');
                            if (nutMoKhac) {
                                nutMoKhac.classList.remove('active');
                            }
                        }
                    }
                });

                if (dangMo) {
                    chiTiet.classList.remove('active');
                    nutMo.classList.remove('active');
                } else {
                    chiTiet.classList.add('active');
                    nutMo.classList.add('active');
                }
            });
        }
    });
});