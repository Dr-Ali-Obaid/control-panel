
import Chart from 'chart.js/auto';


(function () {
    const chartCanvas = document.getElementById('example-chart');
    const colorbrand = (window.getComputedStyle(chartCanvas)).getPropertyValue('--color-brand')
    const data = JSON.parse(chartCanvas.parentElement.dataset.values);

    const chart = new Chart(chartCanvas, {
        type: 'line',
        data: {
            labels: ['ديسمبر', 'نوفمبر', 'أكتوبر', 'سبتمبر', 'أغسطس', 'يوليو', 'يونيو', 'مايو', 'إبريل', 'مارس', 'فبراير', 'يناير'],
            datasets: [{
                label: 'مبيعات الشهر',
                data: data,
                borderWidth: 3,
                borderColor: colorbrand,
                lineTension: 0.2
            }]
        },
        options: {
            scales: {
                y: {
                    display: false
                },
                x: {
                    position: "top"
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });

    const navigation = document.querySelector('.c-table__navigation');
    const randomArray = (mylength, max) => Array.from({length: mylength}, ()=> Math.round(Math.random()*max));
    navigation.addEventListener("click", ()=>{
        chart.data.datasets[0].data = randomArray(12, 1200);
        chart.update()
    })
   
})();