Chart.register(ChartDataLabels);

const data = [
  {
      title: 'Uso de tecnologías innovadoras en el campus',
      labels: ['Positiva', 'Negativa', 'Indiferente', 'No estoy seguro/a'],
      datasets: [{
          data: [100, 0, 0, 0],
          backgroundColor: [
              'rgb(54, 201, 198)',
              'rgb(230, 235, 224)',
              'rgb(244, 241, 187)',
              'rgb(255, 159, 64)'
          ]
      }],      
    datalabels: {
      anchor: 'center',
    }
  },
  
  {
      title: 'Experiencia de usuario en campus salitre',
      labels: ['Mejorando la eficiencia en la gestión de los recursos del campus', 'Aumentando la seguridad del campus', 
      'Facilitando el acceso a la información y servicios', 'Todas las anteriores'],
      datasets: [{
          data: [25, 0, 0, 75],
          backgroundColor: [            
            'rgb(230, 235, 224)',
            'rgb(244, 241, 187)',
            'rgb(255, 159, 64)',
            'rgb(54, 201, 198)',
          ]    
      }]
  },
  {
      title: 'Valoración de áreas y tecnologías de campus salitre',
      labels: [
        'Infraestructura',
        'Investigación e innovación',
        'Medio ambiente',
        'Redes inteligentes',
        'Salud',
        'Seguridad y protección',
        'Servicios del campus',
        'Transporte/Movilidad',
        'Uso de energías renovables'
    ],
    datasets: [{
        data: [12, 12, 12, 11, 10, 11, 9, 12, 11],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(153, 102, 255)',
            'rgb(255, 159, 64)',
            'rgb(231, 233, 237)',
            'rgb(44, 62, 80)',
            'rgb(26, 188, 156)'
        ]
    }]
  },
  {
      title: 'Valoración del beneficio para diferentes grupos de usuarios del campus salitre',
      labels: [
        'Estudiantes',
        'Otro personal',
        'Personal de administración y servicios',
        'Personal docente investigador',
        'Socios/proveedores',
        'Visitantes'
    ],
    datasets: [{
        data: [16, 15, 16, 18, 18, 17],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(153, 102, 255)',
            'rgb(255, 159, 64)'
        ]
    }]
  }
];

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
        position: 'bottom',
        labels: {
            generateLabels: function(chart) {
                const data = chart.data;
                if (data.labels.length && data.datasets.length) {
                    return data.labels.map(function(label, i) {
                        const dataset = data.datasets[0];
                        const value = dataset.data[i];
                        const percentage = ((value / dataset.data.reduce((a, b) => a + b, 0)) * 100).toFixed(1);
                        return {
                            text: label + ': ' + percentage + '%',
                            fillStyle: dataset.backgroundColor[i],
                            hidden: isNaN(value) || value === 0,
                            index: i
                        };
                    });
                }
                return [];
            }
        }
    },
    tooltip: {
        callbacks: {
            label: function(context) {
                const label = context.label || '';
                const value = context.parsed !== undefined ? context.parsed : context.dataset.data[context.dataIndex];
                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                const percentage = ((value / total) * 100).toFixed(0);
                return label + ': ' + percentage + '%';
            }
        }
    },
    datalabels: {
      color: 'white', // Color del texto de las etiquetas de datos
      formatter: function(value, context) {
        const total = context.dataset.data.reduce((a, b) => a + b, 0);
        const percentage = ((value / total) * 100).toFixed(0);
        return percentage + '%'; // Agregar el símbolo "%"
      }
    }
  
},
};

let charts = [];

for (let i = 0; i < 4; i++) {
  const ctx = document.getElementById(`chart${i}`).getContext('2d');
  charts[i] = new Chart(ctx, {
      type: 'pie',
      data: data[i],
      options: options
  });
  document.getElementById(`chart-title${i}`).textContent = data[i].title;
}

let currentIndex = 0;
showChart(currentIndex);

function showChart(index) {
  currentIndex = index;
  const chartContainers = document.querySelectorAll('.chart-container');
  const paginationButtons = document.querySelectorAll('.pagination button');

  chartContainers.forEach((container, i) => {
      if (i === index) {
          container.classList.add('active');
          charts[i].update();
      } else {
          container.classList.remove('active');
      }
  });

  paginationButtons.forEach((button, i) => {
      if (i === index + 1) {
          button.classList.add('active');
      } else {
          button.classList.remove('active');
      }
  });
}

function previousChart() {
  if (currentIndex > 0) {
      showChart(currentIndex - 1);
  }
}

function nextChart() {
  if (currentIndex < 3) {
      showChart(currentIndex + 1);
  }
}


