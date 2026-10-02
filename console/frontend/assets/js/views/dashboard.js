export async function renderDashboard(api) {
  const container = document.createElement('div');
  container.className = 'container';

  container.innerHTML = `
    <div class="header">
      <h1>Cloud Infrastructure Dashboard</h1>
      <button id="refresh-btn" class="btn">Refresh Data</button>
    </div>

    <div class="card">
      <h2>System Overview</h2>
      <p>Status: <span style="color: #4ade80;">Active</span></p>
      <p>Node Gateways: Telemetry Online</p>
    </div>

    <div class="card">
      <h2>Active Profiles & Channels</h2>
      <div id="channels-list">
        <p>Loading channel metrics...</p>
      </div>
    </div>
  `;

  return container;
}
