
(function () {
    const tabs = document.querySelectorAll('.js-tabs');
    Array.from(tabs, tab => {
        const link = tab.querySelectorAll('.js-tab-link');
        let currentActive = tab.querySelector('.js-tab-link.is-active');

        const toggled = (togTab = currentActive) => {
            currentActive = togTab || currentActive;
            togTab.classList.toggle('is-active');

            const togDataTab = togTab.dataset.index;
            const togDataContent = tab.querySelector(`.js-textarea[data-indexed = ${togDataTab}]`)
            togDataContent.classList.toggle('is-active')
        }
        if (!currentActive) {
            toggled(link[0])
        };

        link.forEach(i => {
            i.addEventListener('click', function () {
                if (currentActive == this)
                    return;
                // في حالة تم الضغط على التبويب النشط فسيتم الرجوع وعدم عمل شيء
                if (currentActive)
                    toggled();
                // في حالة وجود أي تبويب نشط غير مضغوط عليه حاليا فسيتم إزالة التنشيط عنه
                toggled(this);
                 // بعد التخلص من الحالتين السابقتين سيتم تنشيط التبويب الذي لم يكن نشطا من قبل عند الضغط عليه بمفرده 
            }
            );
        });
    });
})();
