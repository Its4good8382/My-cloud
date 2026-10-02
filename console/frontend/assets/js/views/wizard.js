export async function renderWizard(api) {
  const container = document.createElement('div');
  container.className = 'container';

  container.innerHTML = `
    <div class="header">
      <h1>Cloud Node Setup Wizard</h1>
    </div>

    <div class="card">
      <h2>Step 1: Endpoint Configuration</h2>
      <form id="wizard-form">
        <div style="margin-bottom: 1rem;">
          <label style="display: block; margin-bottom: 0.5rem;">Node Name:</label>
          <input type="text" placeholder="e.g. Edge-Node-01" style="width: 100%; padding: 0.5rem; background: #0f172a; color: #fff; border: 1px solid #334155; border-radius: 4px;">
        </div>

        <div style="margin-bottom: 1rem;">
          <label style="display: block; margin-bottom: 0.5rem;">Engine Protocol Mode:</label>
          <select style="width: 100%; padding: 0.5rem; background: #0f172a; color: #fff; border: 1px solid #334155; border-radius: 4px;">
            <option value="mode_a">Standard Channel (Mode A)</option>
            <option value="mode_b">Secure Tunnel (Mode B)</option>
            <option value="mode_c">Direct Edge (Mode C)</option>
          </select>
        </div>

        <button type="submit" class="btn">Deploy Endpoint</button>
      </form>
    </div>
  `;

  return container;
}
