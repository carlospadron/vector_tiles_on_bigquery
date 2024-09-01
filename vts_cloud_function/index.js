const { BigQuery } = require('@google-cloud/bigquery');

// Use environment variables for configuration
const projectId = process.env.PROJECT_ID || 'os-data-433106';
const datasetId = process.env.DATASET_ID || 'os';
const tableId = process.env.TABLE_ID || 'os-open-uprn';

async function vts(req, res) {
  const query = `SELECT * FROM \`${projectId}.${datasetId}.${tableId}\` LIMIT 10`;
  const bigquery = new BigQuery({ projectId });

  try {
    const [rows] = await bigquery.query(query);
    console.log('Query successful:', rows);

    // Return a proper HTTP response
    res.status(200).json({ rows });
  } catch (error) {
    console.error('Error executing query:', error);

    // Return a proper HTTP error response
    res.status(500).json({ error: error.message });
  }
}

exports.vts = vts;