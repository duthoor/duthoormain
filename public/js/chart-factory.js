export const ChartFactory = {
  chartInstances: new Map(),

  destroyChart(chartId) {
    if (this.chartInstances.has(chartId)) {
      this.chartInstances.get(chartId).destroy();
      this.chartInstances.delete(chartId);
    }
  },

  /**
   * Creates a pie chart with the given data.
   * @param {string} chartId - The ID of the canvas element.
   * @param {Object} data - The data for the chart.
   * @param {Array<string>} data.labels - The labels for the pie chart.
   * @param {Array<number>} data.values - The values for the pie chart.
   */
  createPieChart(chartId, { labels, values }) {
    const ctx = document.getElementById(chartId).getContext('2d');
    const styles = getComputedStyle(document.documentElement);
    const colors = [
      styles.getPropertyValue('--primary-color').trim(),
      styles.getPropertyValue('--secondary-1').trim(),
      styles.getPropertyValue('--secondary-2').trim(),
      styles.getPropertyValue('--warning-color').trim(),
      styles.getPropertyValue('--error-color').trim(),
    ];

    this.destroyChart(chartId);

    const chart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels,
        datasets: [
          {
            data: values,
            backgroundColor: values.map((_, i) => colors[i % colors.length]),
            borderColor: styles.getPropertyValue('--white').trim(),
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'right',
            labels: {
              color: styles.getPropertyValue('--text-color').trim(),
              font: {
                size: 14,
              },
              padding: 20,
              usePointStyle: true,
            },
          },
        },
      },
    });
    this.chartInstances.set(chartId, chart);
  },

  /**
   * Creates a bar chart with the given data.
   * @param {string} chartId - The ID of the canvas element.
   * @param {Object} data - The data for the chart.
   * @param {Array<string>} data.labels - The labels for the bar chart.
   * @param {Array<number>} data.values - The values for the bar chart.
   * @param {number} currentIndex - The index of the current value to highlight.
   */
  createBarChart(chartId, { labels, values, currentIndex }) {
    const ctx = document.getElementById(chartId).getContext('2d');
    const styles = getComputedStyle(document.documentElement);

    this.destroyChart(chartId);

    const chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels,
        datasets: [
          {
            label: 'Monthly Spending',
            data: values,
            backgroundColor: values.map((_, i) =>
              i === currentIndex
                ? styles.getPropertyValue('--primary-color').trim()
                : styles.getPropertyValue('--secondary-2').trim()
            ),
            borderColor: styles.getPropertyValue('--primary-dark').trim(),
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
    this.chartInstances.set(chartId, chart);
  },
};
