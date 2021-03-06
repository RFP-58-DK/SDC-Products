
import http from 'k6/http';
import { sleep } from 'k6';
export const options = {
  scenarios: {
    constant_request_rate: {
      executor: 'constant-arrival-rate',
      rate: 1500,
      timeUnit: '1s',
      duration: '60s',
      preAllocatedVUs: 100,
      maxVUs: 100
    }
  }
}

export default function () {
  http.get('http://127.0.0.1:3000/product_styles');
}