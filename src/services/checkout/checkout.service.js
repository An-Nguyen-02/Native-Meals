import createStripe from 'stripe-client';
import { host } from '../../utils/env';
const stripe = createStripe(
  'pk_test_51KSjpCBYp3P0VPu4qlVoSK2SwYMcS0HMwJmI8bPOkJFGDtxyrgYvz2EZNKBeb8n916k41ucT3Wu9qKI3q3QWpklJ00khAWF3Xz'
);

export const cardTokenRequest = (card) => stripe.createToken({ card });

export const payRequest = (token, amount, name) => {
  return fetch(`${host}/pay`, {
    body: JSON.stringify({
      token,
      name,
      amount,
    }),
    method: 'POST',
  }).then((res) => {
    if (res.status > 200) {
      return Promise.reject('Something went wrong with the payment');
    }
    return res.json();
  });
};
