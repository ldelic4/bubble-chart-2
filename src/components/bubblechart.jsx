return (
    <div style={{ textAlign: 'center' }}>
      <h1>Dynamic Charts with React and Chart.js</h1>
      <BarChart data={chartData} />
      <LineChart data={chartData} />
      <ScatterChart data={chartData} />
      <BubbleChart data={chartData} />
    </div>
  );