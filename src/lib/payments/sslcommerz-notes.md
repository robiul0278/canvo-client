// SSLCommerz integration notes (from audit-report.md and prompt section 10)
// Sandbox credentials must come from .env (SSLCOMMERZ_STORE_ID, SSLCOMMERZ_STORE_PASS)
// The server endpoint POST /payments/sslcommerz/init handles initialization securely
// Never expose store credentials in client code
// Client should redirect to SSLCommerz sandbox URL after receiving init response
