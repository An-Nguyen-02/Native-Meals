import createStripe from 'stripe-client';
const stripe = createStripe(
  'pk_test_51KSjpCBYp3P0VPu4qlVoSK2SwYMcS0HMwJmI8bPOkJFGDtxyrgYvz2EZNKBeb8n916k41ucT3Wu9qKI3q3QWpklJ00khAWF3Xz'
);

export const cardTokenRequest = (card) => stripe.createToken(stripe);
