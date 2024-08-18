// Creator: Grafana k6 Browser Recorder 1.0.4

import { sleep, group } from 'k6'
import http from 'k6/http'

export const options = {}

export default function main() {
  let response

  group('page_1 - https://develop.peredeals.com/fund/9cgch#overview', function () {
    response = http.get('https://develop.peredeals.com/fund/9cgch', {
      headers: {
        'upgrade-insecure-requests': '1',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://develop.peredeals.com/logo/pere-deals-logo.svg', {
      headers: {
        referer: 'https://develop.peredeals.com/fund/9cgch',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://develop.peredeals.com/_next/static/css/acbc46fcb7ccd546.css', {
      headers: {
        referer: 'https://develop.peredeals.com/fund/9cgch',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://develop.peredeals.com/_next/static/css/b8ec78db4e9dd846.css', {
      headers: {
        referer: 'https://develop.peredeals.com/fund/9cgch',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get(
      'https://develop.peredeals.com/_next/static/chunks/webpack-23d3c1a73c099d36.js',
      {
        headers: {
          referer: 'https://develop.peredeals.com/fund/9cgch',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://develop.peredeals.com/_next/static/chunks/1dd3208c-a6f5d538678a4b40.js',
      {
        headers: {
          referer: 'https://develop.peredeals.com/fund/9cgch',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://develop.peredeals.com/_next/static/chunks/9997-6f4640680e2fa164.js',
      {
        headers: {
          referer: 'https://develop.peredeals.com/fund/9cgch',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://develop.peredeals.com/_next/static/chunks/main-app-9474e44d1844e1a8.js',
      {
        headers: {
          referer: 'https://develop.peredeals.com/fund/9cgch',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://develop.peredeals.com/_next/static/chunks/dccfb526-8a6af711d12d8b8a.js',
      {
        headers: {
          referer: 'https://develop.peredeals.com/fund/9cgch',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://develop.peredeals.com/_next/static/chunks/17a9af85-2a28a1c81372a97c.js',
      {
        headers: {
          referer: 'https://develop.peredeals.com/fund/9cgch',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://develop.peredeals.com/_next/static/chunks/da774d26-dbbdfb0dd9cdae38.js',
      {
        headers: {
          referer: 'https://develop.peredeals.com/fund/9cgch',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://develop.peredeals.com/_next/static/chunks/78dcd220-e2cbb4be0a9fd619.js',
      {
        headers: {
          referer: 'https://develop.peredeals.com/fund/9cgch',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://develop.peredeals.com/_next/static/chunks/61af6f7f-50c250b6c04d89cd.js',
      {
        headers: {
          referer: 'https://develop.peredeals.com/fund/9cgch',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://develop.peredeals.com/_next/static/chunks/e47cb353-d9a8d9855271ca19.js',
      {
        headers: {
          referer: 'https://develop.peredeals.com/fund/9cgch',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://develop.peredeals.com/_next/static/chunks/39209d7c-b04b0b61e8d783ae.js',
      {
        headers: {
          referer: 'https://develop.peredeals.com/fund/9cgch',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://develop.peredeals.com/_next/static/chunks/9081a741-69b0afd598f6cf2c.js',
      {
        headers: {
          referer: 'https://develop.peredeals.com/fund/9cgch',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://develop.peredeals.com/_next/static/chunks/4f53ad1b-e7cb8c1d441566c1.js',
      {
        headers: {
          referer: 'https://develop.peredeals.com/fund/9cgch',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://develop.peredeals.com/_next/static/chunks/e685ae08-7d59685da7761772.js',
      {
        headers: {
          referer: 'https://develop.peredeals.com/fund/9cgch',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://develop.peredeals.com/_next/static/chunks/5103-9029aeb5f0447201.js',
      {
        headers: {
          referer: 'https://develop.peredeals.com/fund/9cgch',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://develop.peredeals.com/_next/static/chunks/1908-68426910e6f4b8a3.js',
      {
        headers: {
          referer: 'https://develop.peredeals.com/fund/9cgch',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://develop.peredeals.com/_next/static/chunks/3040-fda002565f62d826.js',
      {
        headers: {
          referer: 'https://develop.peredeals.com/fund/9cgch',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://develop.peredeals.com/_next/static/chunks/5136-92691192bb8ca60e.js',
      {
        headers: {
          referer: 'https://develop.peredeals.com/fund/9cgch',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://develop.peredeals.com/_next/static/chunks/4584-4f712c2963b42d17.js',
      {
        headers: {
          referer: 'https://develop.peredeals.com/fund/9cgch',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://develop.peredeals.com/_next/static/chunks/7074-dda1263c5120a501.js',
      {
        headers: {
          referer: 'https://develop.peredeals.com/fund/9cgch',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://develop.peredeals.com/_next/static/chunks/268-b1c033fa17b458e4.js',
      {
        headers: {
          referer: 'https://develop.peredeals.com/fund/9cgch',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://develop.peredeals.com/_next/static/chunks/2516-c6fcd07a0f997299.js',
      {
        headers: {
          referer: 'https://develop.peredeals.com/fund/9cgch',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://develop.peredeals.com/_next/static/chunks/3905-d85f96d49425530d.js',
      {
        headers: {
          referer: 'https://develop.peredeals.com/fund/9cgch',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://develop.peredeals.com/_next/static/chunks/2981-fadf6db2bd6c7aba.js',
      {
        headers: {
          referer: 'https://develop.peredeals.com/fund/9cgch',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://develop.peredeals.com/_next/static/chunks/2467-2027c0870ef880cb.js',
      {
        headers: {
          referer: 'https://develop.peredeals.com/fund/9cgch',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://develop.peredeals.com/_next/static/chunks/app/layout-48cdbeaed6132cfa.js',
      {
        headers: {
          referer: 'https://develop.peredeals.com/fund/9cgch',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://develop.peredeals.com/_next/static/chunks/3296-19dabb34f2abf51c.js',
      {
        headers: {
          referer: 'https://develop.peredeals.com/fund/9cgch',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://develop.peredeals.com/_next/static/chunks/app/(shared-pages)/fund/%5Bid%5D/page-d43cd5701d583dbc.js',
      {
        headers: {
          referer: 'https://develop.peredeals.com/fund/9cgch',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://develop.peredeals.com/_next/static/chunks/app/error-cf7b91c63e2a7a3b.js',
      {
        headers: {
          referer: 'https://develop.peredeals.com/fund/9cgch',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://develop.peredeals.com/_next/static/chunks/app/global-error-09812196c44c7062.js',
      {
        headers: {
          referer: 'https://develop.peredeals.com/fund/9cgch',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get('https://consent.cookiebot.com/uc.js', {
      headers: {
        referer: 'https://develop.peredeals.com/',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get(
      'https://develop.peredeals.com/_next/static/media/DuNord-Bold.640b7755.otf',
      {
        headers: {
          origin: 'https://develop.peredeals.com',
          referer: 'https://develop.peredeals.com/_next/static/css/acbc46fcb7ccd546.css',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://develop.peredeals.com/_next/static/media/DuNord-Regular.14742010.otf',
      {
        headers: {
          origin: 'https://develop.peredeals.com',
          referer: 'https://develop.peredeals.com/_next/static/css/acbc46fcb7ccd546.css',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get('https://develop.peredeals.com/assets/vertical-bars.svg', {
      headers: {
        referer: 'https://develop.peredeals.com/fund/9cgch',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://develop.peredeals.com/logo/pei-group-logo.svg', {
      headers: {
        referer: 'https://develop.peredeals.com/fund/9cgch',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.post(
      'https://browser-intake-datadoghq.eu/api/v2/rum?ddsource=browser&ddtags=sdk_version%3A5.21.0%2Capi%3Afetch%2Cenv%3Adevelop%2Cservice%3Afusion-develop-rum&dd-api-key=pub23d14632f753ff51ae3a0a895ef751e3&dd-evp-origin-version=5.21.0&dd-evp-origin=browser&dd-request-id=57bd30bb-b127-4d69-b3d3-bdccfcc8a8bc&batch_time=1723122612136',
      '{"_dd":{"format_version":2,"drift":-1,"configuration":{"session_sample_rate":100,"session_replay_sample_rate":0},"discarded":false},"application":{"id":"e8f0eb7c-481d-4883-9780-316a96c84484"},"date":1723122610851,"service":"fusion-develop-rum","source":"browser","session":{"id":"551357c3-3104-4f81-964d-6d94bfdb7b9c","type":"user"},"view":{"id":"19e52fd3-214b-401a-85f9-b155ace7b3ec","url":"https://develop.peredeals.com/fund/9cgch#overview","referrer":""},"action":{"id":[]},"display":{"viewport":{"width":2378.75,"height":1073.75}},"connectivity":{"status":"connected","effective_type":"4g"},"resource":{"id":"37f7ed5f-c7cd-4d49-9da3-bf7becabba7c","type":"document","url":"https://develop.peredeals.com/fund/9cgch#overview","status_code":200,"duration":417700000,"render_blocking_status":"non-blocking","size":83276,"encoded_body_size":20698,"decoded_body_size":83276,"transfer_size":20998,"download":{"duration":150900000,"start":266800000},"first_byte":{"duration":263800000,"start":3000000}},"type":"resource"}\n{"_dd":{"format_version":2,"drift":0,"configuration":{"session_sample_rate":100,"session_replay_sample_rate":0},"discarded":false},"application":{"id":"e8f0eb7c-481d-4883-9780-316a96c84484"},"date":1723122611132,"service":"fusion-develop-rum","source":"browser","session":{"id":"551357c3-3104-4f81-964d-6d94bfdb7b9c","type":"user"},"view":{"id":"19e52fd3-214b-401a-85f9-b155ace7b3ec","url":"https://develop.peredeals.com/fund/9cgch#overview","referrer":""},"action":{"id":[]},"display":{"viewport":{"width":2378.75,"height":1073.75}},"connectivity":{"status":"connected","effective_type":"4g"},"resource":{"id":"808c444d-585c-461d-bc21-3c0727aacecf","type":"image","url":"https://develop.peredeals.com/logo/pere-deals-logo.svg","status_code":200,"duration":155200000,"render_blocking_status":"non-blocking","size":6775,"encoded_body_size":2559,"decoded_body_size":6775,"transfer_size":2859,"download":{"duration":1600000,"start":153600000},"first_byte":{"duration":150300000,"start":3300000}},"type":"resource"}\n{"_dd":{"format_version":2,"drift":0,"configuration":{"session_sample_rate":100,"session_replay_sample_rate":0},"discarded":false},"application":{"id":"e8f0eb7c-481d-4883-9780-316a96c84484"},"date":1723122611133,"service":"fusion-develop-rum","source":"browser","session":{"id":"551357c3-3104-4f81-964d-6d94bfdb7b9c","type":"user"},"view":{"id":"19e52fd3-214b-401a-85f9-b155ace7b3ec","url":"https://develop.peredeals.com/fund/9cgch#overview","referrer":""},"action":{"id":[]},"display":{"viewport":{"width":2378.75,"height":1073.75}},"connectivity":{"status":"connected","effective_type":"4g"},"resource":{"id":"44097593-3bf4-4049-9c42-da1dab49f610","type":"css","url":"https://develop.peredeals.com/_next/static/css/acbc46fcb7ccd546.css","status_code":200,"duration":171100000,"render_blocking_status":"blocking","size":62396,"encoded_body_size":12406,"decoded_body_size":62396,"transfer_size":12706,"download":{"duration":2900000,"start":168200000},"first_byte":{"duration":154800000,"start":13400000}},"type":"resource"}\n{"_dd":{"format_version":2,"drift":0,"configuration":{"session_sample_rate":100,"session_replay_sample_rate":0},"discarded":false},"application":{"id":"e8f0eb7c-481d-4883-9780-316a96c84484"},"date":1723122611133,"service":"fusion-develop-rum","source":"browser","session":{"id":"551357c3-3104-4f81-964d-6d94bfdb7b9c","type":"user"},"view":{"id":"19e52fd3-214b-401a-85f9-b155ace7b3ec","url":"https://develop.peredeals.com/fund/9cgch#overview","referrer":""},"action":{"id":[]},"display":{"viewport":{"width":2378.75,"height":1073.75}},"connectivity":{"status":"connected","effective_type":"4g"},"resource":{"id":"06166d02-0718-446e-920d-9442801a8aca","type":"css","url":"https://develop.peredeals.com/_next/static/css/b8ec78db4e9dd846.css","status_code":200,"duration":176100000,"render_blocking_status":"blocking","size":65623,"encoded_body_size":13065,"decoded_body_size":65623,"transfer_size":13365,"download":{"duration":8000000,"start":168100000},"first_byte":{"duration":154700000,"start":13400000}},"type":"resource"}\n{"_dd":{"format_version":2,"drift":0,"configuration":{"session_sample_rate":100,"session_replay_sample_rate":0},"discarded":false},"application":{"id":"e8f0eb7c-481d-4883-9780-316a96c84484"},"date":1723122611133,"service":"fusion-develop-rum","source":"browser","session":{"id":"551357c3-3104-4f81-964d-6d94bfdb7b9c","type":"user"},"view":{"id":"19e52fd3-214b-401a-85f9-b155ace7b3ec","url":"https://develop.peredeals.com/fund/9cgch#overview","referrer":""},"action":{"id":[]},"display":{"viewport":{"width":2378.75,"height":1073.75}},"connectivity":{"status":"connected","effective_type":"4g"},"resource":{"id":"a60cbf1e-9c39-405f-9ac7-c1c838dbf4dd","type":"js","url":"https://develop.peredeals.com/_next/static/chunks/webpack-23d3c1a73c099d36.js","status_code":200,"duration":211300000,"render_blocking_status":"non-blocking","size":3972,"encoded_body_size":1860,"decoded_body_size":3972,"transfer_size":2160,"download":{"duration":35000000,"start":176300000},"first_byte":{"duration":155900000,"start":20400000}},"type":"resource"}\n{"_dd":{"format_version":2,"drift":0,"configuration":{"session_sample_rate":100,"session_replay_sample_rate":0},"discarded":false},"application":{"id":"e8f0eb7c-481d-4883-9780-316a96c84484"},"date":1723122611133,"service":"fusion-develop-rum","source":"browser","session":{"id":"551357c3-3104-4f81-964d-6d94bfdb7b9c","type":"user"},"view":{"id":"19e52fd3-214b-401a-85f9-b155ace7b3ec","url":"https://develop.peredeals.com/fund/9cgch#overview","referrer":""},"action":{"id":[]},"display":{"viewport":{"width":2378.75,"height":1073.75}},"connectivity":{"status":"connected","effective_type":"4g"},"resource":{"id":"7a53fd79-97a8-4648-8d5c-a1d2d1808251","type":"js","url":"https://develop.peredeals.com/_next/static/chunks/1dd3208c-a6f5d538678a4b40.js","status_code":200,"duration":333700000,"render_blocking_status":"non-blocking","size":172166,"encoded_body_size":53464,"decoded_body_size":172166,"transfer_size":53764,"download":{"duration":48800000,"start":284900000},"first_byte":{"duration":264400000,"start":20500000}},"type":"resource"}\n{"_dd":{"format_version":2,"drift":0,"configuration":{"session_sample_rate":100,"session_replay_sample_rate":0},"discarded":false},"application":{"id":"e8f0eb7c-481d-4883-9780-316a96c84484"},"date":1723122611133,"service":"fusion-develop-rum","source":"browser","session":{"id":"551357c3-3104-4f81-964d-6d94bfdb7b9c","type":"user"},"view":{"id":"19e52fd3-214b-401a-85f9-b155ace7b3ec","url":"https://develop.peredeals.com/fund/9cgch#overview","referrer":""},"action":{"id":[]},"display":{"viewport":{"width":2378.75,"height":1073.75}},"connectivity":{"status":"connected","effective_type":"4g"},"resource":{"id":"76bd0f42-413e-4e75-ab5d-61e4c8d87490","type":"js","url":"https://develop.peredeals.com/_next/static/chunks/9997-6f4640680e2fa164.js","status_code":200,"duration":331900000,"render_blocking_status":"non-blocking","size":112123,"encoded_body_size":29171,"decoded_body_size":112123,"transfer_size":29471,"download":{"duration":47000000,"start":284900000},"first_byte":{"duration":264300000,"start":20600000}},"type":"resource"}\n{"_dd":{"format_version":2,"drift":0,"configuration":{"session_sample_rate":100,"session_replay_sample_rate":0},"discarded":false},"application":{"id":"e8f0eb7c-481d-4883-9780-316a96c84484"},"date":1723122611133,"service":"fusion-develop-rum","source":"browser","session":{"id":"551357c3-3104-4f81-964d-6d94bfdb7b9c","type":"user"},"view":{"id":"19e52fd3-214b-401a-85f9-b155ace7b3ec","url":"https://develop.peredeals.com/fund/9cgch#overview","referrer":""},"action":{"id":[]},"display":{"viewport":{"width":2378.75,"height":1073.75}},"connectivity":{"status":"connected","effective_type":"4g"},"resource":{"id":"1dd38948-4f31-4341-9a4f-22022b369793","type":"js","url":"https://develop.peredeals.com/_next/static/chunks/main-app-9474e44d1844e1a8.js","status_code":200,"duration":339200000,"render_blocking_status":"non-blocking","size":474,"encoded_body_size":474,"decoded_body_size":474,"transfer_size":774,"download":{"duration":6100000,"start":333100000},"first_byte":{"duration":178000000,"start":155100000}},"type":"resource"}\n{"_dd":{"format_version":2,"drift":0,"configuration":{"session_sample_rate":100,"session_replay_sample_rate":0},"discarded":false},"application":{"id":"e8f0eb7c-481d-4883-9780-316a96c84484"},"date":1723122611133,"service":"fusion-develop-rum","source":"browser","session":{"id":"551357c3-3104-4f81-964d-6d94bfdb7b9c","type":"user"},"view":{"id":"19e52fd3-214b-401a-85f9-b155ace7b3ec","url":"https://develop.peredeals.com/fund/9cgch#overview","referrer":""},"action":{"id":[]},"display":{"viewport":{"width":2378.75,"height":1073.75}},"connectivity":{"status":"connected","effective_type":"4g"},"resource":{"id":"74cc381d-2444-4cf8-96ef-3771d46679e5","type":"js","url":"https://develop.peredeals.com/_next/static/chunks/dccfb526-8a6af711d12d8b8a.js","status_code":200,"duration":339700000,"render_blocking_status":"non-blocking","size":1507,"encoded_body_size":672,"decoded_body_size":1507,"transfer_size":972,"download":{"duration":6500000,"start":333200000},"first_byte":{"duration":162000000,"start":171200000}},"type":"resource"}\n{"_dd":{"format_version":2,"drift":-1,"configuration":{"session_sample_rate":100,"session_replay_sample_rate":0},"discarded":false},"application":{"id":"e8f0eb7c-481d-4883-9780-316a96c84484"},"date":1723122611133,"service":"fusion-develop-rum","source":"browser","session":{"id":"551357c3-3104-4f81-964d-6d94bfdb7b9c","type":"user"},"view":{"id":"19e52fd3-214b-401a-85f9-b155ace7b3ec","url":"https://develop.peredeals.com/fund/9cgch#overview","referrer":""},"action":{"id":[]},"display":{"viewport":{"width":2378.75,"height":1073.75}},"connectivity":{"status":"connected","effective_type":"4g"},"resource":{"id":"41d05fa8-c083-40e9-a3ce-86e8417a041e","type":"js","url":"https://develop.peredeals.com/_next/static/chunks/17a9af85-2a28a1c81372a97c.js","status_code":200,"duration":340300000,"render_blocking_status":"non-blocking","size":4589,"encoded_body_size":1537,"decoded_body_size":4589,"transfer_size":1837,"download":{"duration":7000000,"start":333300000},"first_byte":{"duration":156700000,"start":176600000}},"type":"resource"}\n{"_dd":{"format_version":2,"drift":-1,"configuration":{"session_sample_rate":100,"session_replay_sample_rate":0},"discarded":false},"application":{"id":"e8f0eb7c-481d-4883-9780-316a96c84484"},"date":1723122611133,"service":"fusion-develop-rum","source":"browser","session":{"id":"551357c3-3104-4f81-964d-6d94bfdb7b9c","type":"user"},"view":{"id":"19e52fd3-214b-401a-85f9-b155ace7b3ec","url":"https://develop.peredeals.com/fund/9cgch#overview","referrer":""},"action":{"id":[]},"display":{"viewport":{"width":2378.75,"height":1073.75}},"connectivity":{"status":"connected","effective_type":"4g"},"resource":{"id":"a22aacbd-1f1b-4ee8-bedd-94beec6c965e","type":"js","url":"https://develop.peredeals.com/_next/static/chunks/da774d26-dbbdfb0dd9cdae38.js","status_code":200,"duration":500100000,"render_blocking_status":"non-blocking","size":943,"encoded_body_size":943,"decoded_body_size":943,"transfer_size":1243,"download":{"duration":2100000,"start":498000000},"first_byte":{"duration":158200000,"start":339800000}},"type":"resource"}\n{"_dd":{"format_version":2,"drift":-1,"configuration":{"session_sample_rate":100,"session_replay_sample_rate":0},"discarded":false},"application":{"id":"e8f0eb7c-481d-4883-9780-316a96c84484"},"date":1723122611133,"service":"fusion-develop-rum","source":"browser","session":{"id":"551357c3-3104-4f81-964d-6d94bfdb7b9c","type":"user"},"view":{"id":"19e52fd3-214b-401a-85f9-b155ace7b3ec","url":"https://develop.peredeals.com/fund/9cgch#overview","referrer":""},"action":{"id":[]},"display":{"viewport":{"width":2378.75,"height":1073.75}},"connectivity":{"status":"connected","effective_type":"4g"},"resource":{"id":"5e0a73b9-837f-4e9b-812b-7030d180d144","type":"js","url":"https://develop.peredeals.com/_next/static/chunks/78dcd220-e2cbb4be0a9fd619.js","status_code":200,"duration":500300000,"render_blocking_status":"non-blocking","size":2905,"encoded_body_size":912,"decoded_body_size":2905,"transfer_size":1212,"download":{"duration":1300000,"start":499000000},"first_byte":{"duration":157400000,"start":341600000}},"type":"resource"}\n{"_dd":{"format_version":2,"drift":-1,"configuration":{"session_sample_rate":100,"session_replay_sample_rate":0},"discarded":false},"application":{"id":"e8f0eb7c-481d-4883-9780-316a96c84484"},"date":1723122611133,"service":"fusion-develop-rum","source":"browser","session":{"id":"551357c3-3104-4f81-964d-6d94bfdb7b9c","type":"user"},"view":{"id":"19e52fd3-214b-401a-85f9-b155ace7b3ec","url":"https://develop.peredeals.com/fund/9cgch#overview","referrer":""},"action":{"id":[]},"display":{"viewport":{"width":2378.75,"height":1073.75}},"connectivity":{"status":"connected","effective_type":"4g"},"resource":{"id":"edee08b6-742c-4300-aa0f-aabfea59d326","type":"js","url":"https://develop.peredeals.com/_next/static/chunks/61af6f7f-50c250b6c04d89cd.js","status_code":200,"duration":500400000,"render_blocking_status":"non-blocking","size":1429,"encoded_body_size":575,"decoded_body_size":1429,"transfer_size":875,"download":{"duration":1400000,"start":499000000},"first_byte":{"duration":157400000,"start":341600000}},"type":"resource"}\n{"_dd":{"format_version":2,"drift":-1,"configuration":{"session_sample_rate":100,"session_replay_sample_rate":0},"discarded":false},"application":{"id":"e8f0eb7c-481d-4883-9780-316a96c84484"},"date":1723122611133,"service":"fusion-develop-rum","source":"browser","session":{"id":"551357c3-3104-4f81-964d-6d94bfdb7b9c","type":"user"},"view":{"id":"19e52fd3-214b-401a-85f9-b155ace7b3ec","url":"https://develop.peredeals.com/fund/9cgch#overview","referrer":""},"action":{"id":[]},"display":{"viewport":{"width":2378.75,"height":1073.75}},"connectivity":{"status":"connected","effective_type":"4g"},"resource":{"id":"56e30c7c-e3f6-4224-81d1-99564a25d5c7","type":"js","url":"https://develop.peredeals.com/_next/static/chunks/e47cb353-d9a8d9855271ca19.js","status_code":200,"duration":501800000,"render_blocking_status":"non-blocking","size":52477,"encoded_body_size":13118,"decoded_body_size":52477,"transfer_size":13418,"download":{"duration":2900000,"start":498900000},"first_byte":{"duration":157100000,"start":341800000}},"type":"resource"}\n{"_dd":{"format_version":2,"drift":0,"configuration":{"session_sample_rate":100,"session_replay_sample_rate":0,"start_session_replay_recording_manually":false},"document_version":1,"page_states":[{"state":"active","start":1275900000}]},"application":{"id":"e8f0eb7c-481d-4883-9780-316a96c84484"},"date":1723122610851,"service":"fusion-develop-rum","source":"browser","session":{"id":"551357c3-3104-4f81-964d-6d94bfdb7b9c","type":"user","sampled_for_replay":false},"view":{"id":"19e52fd3-214b-401a-85f9-b155ace7b3ec","url":"https://develop.peredeals.com/fund/9cgch#overview","referrer":"","action":{"count":0},"frustration":{"count":0},"cumulative_layout_shift":0,"error":{"count":0},"is_active":true,"loading_type":"initial_load","long_task":{"count":0},"resource":{"count":0},"time_spent":1276000000},"display":{"viewport":{"width":2378.75,"height":1073.75}},"connectivity":{"status":"connected","effective_type":"4g"},"type":"view","privacy":{"replay_level":"mask-user-input"}}',
      {
        headers: {
          'content-type': 'text/plain;charset=UTF-8',
          referer: 'https://develop.peredeals.com/',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.post(
      'https://browser-intake-datadoghq.eu/api/v2/rum?ddsource=browser&ddtags=sdk_version%3A5.21.0%2Capi%3Afetch%2Cenv%3Adevelop%2Cservice%3Afusion-develop-rum&dd-api-key=pub23d14632f753ff51ae3a0a895ef751e3&dd-evp-origin-version=5.21.0&dd-evp-origin=browser&dd-request-id=972a88f5-2f0d-4e41-bc21-a25ea7d49c17&batch_time=1723122612137',
      '{"_dd":{"format_version":2,"drift":-1,"configuration":{"session_sample_rate":100,"session_replay_sample_rate":0},"discarded":false},"application":{"id":"e8f0eb7c-481d-4883-9780-316a96c84484"},"date":1723122611134,"service":"fusion-develop-rum","source":"browser","session":{"id":"551357c3-3104-4f81-964d-6d94bfdb7b9c","type":"user"},"view":{"id":"19e52fd3-214b-401a-85f9-b155ace7b3ec","url":"https://develop.peredeals.com/fund/9cgch#overview","referrer":""},"action":{"id":[]},"display":{"viewport":{"width":2378.75,"height":1073.75}},"connectivity":{"status":"connected","effective_type":"4g"},"resource":{"id":"d790b1fd-919d-45ac-b851-e6f11fca9c45","type":"js","url":"https://develop.peredeals.com/_next/static/chunks/39209d7c-b04b0b61e8d783ae.js","status_code":200,"duration":640300000,"render_blocking_status":"non-blocking","size":1157,"encoded_body_size":589,"decoded_body_size":1157,"transfer_size":889,"download":{"duration":700000,"start":639600000},"first_byte":{"duration":150700000,"start":488900000}},"type":"resource"}\n{"_dd":{"format_version":2,"drift":0,"configuration":{"session_sample_rate":100,"session_replay_sample_rate":0},"discarded":false},"application":{"id":"e8f0eb7c-481d-4883-9780-316a96c84484"},"date":1723122611134,"service":"fusion-develop-rum","source":"browser","session":{"id":"551357c3-3104-4f81-964d-6d94bfdb7b9c","type":"user"},"view":{"id":"19e52fd3-214b-401a-85f9-b155ace7b3ec","url":"https://develop.peredeals.com/fund/9cgch#overview","referrer":""},"action":{"id":[]},"display":{"viewport":{"width":2378.75,"height":1073.75}},"connectivity":{"status":"connected","effective_type":"4g"},"resource":{"id":"7c5b7529-80a3-451d-b920-efd69e6ec5c6","type":"js","url":"https://develop.peredeals.com/_next/static/chunks/9081a741-69b0afd598f6cf2c.js","status_code":200,"duration":642000000,"render_blocking_status":"non-blocking","size":1619,"encoded_body_size":747,"decoded_body_size":1619,"transfer_size":1047,"download":{"duration":1200000,"start":640800000},"first_byte":{"duration":150800000,"start":490000000}},"type":"resource"}\n{"_dd":{"format_version":2,"drift":0,"configuration":{"session_sample_rate":100,"session_replay_sample_rate":0},"discarded":false},"application":{"id":"e8f0eb7c-481d-4883-9780-316a96c84484"},"date":1723122611134,"service":"fusion-develop-rum","source":"browser","session":{"id":"551357c3-3104-4f81-964d-6d94bfdb7b9c","type":"user"},"view":{"id":"19e52fd3-214b-401a-85f9-b155ace7b3ec","url":"https://develop.peredeals.com/fund/9cgch#overview","referrer":""},"action":{"id":[]},"display":{"viewport":{"width":2378.75,"height":1073.75}},"connectivity":{"status":"connected","effective_type":"4g"},"resource":{"id":"397ec02b-af8a-4f62-ab93-653a99489efa","type":"js","url":"https://develop.peredeals.com/_next/static/chunks/4f53ad1b-e7cb8c1d441566c1.js","status_code":200,"duration":652900000,"render_blocking_status":"non-blocking","size":916,"encoded_body_size":916,"decoded_body_size":916,"transfer_size":1216,"download":{"duration":900000,"start":652000000},"first_byte":{"duration":151300000,"start":500700000}},"type":"resource"}\n{"_dd":{"format_version":2,"drift":0,"configuration":{"session_sample_rate":100,"session_replay_sample_rate":0},"discarded":false},"application":{"id":"e8f0eb7c-481d-4883-9780-316a96c84484"},"date":1723122611134,"service":"fusion-develop-rum","source":"browser","session":{"id":"551357c3-3104-4f81-964d-6d94bfdb7b9c","type":"user"},"view":{"id":"19e52fd3-214b-401a-85f9-b155ace7b3ec","url":"https://develop.peredeals.com/fund/9cgch#overview","referrer":""},"action":{"id":[]},"display":{"viewport":{"width":2378.75,"height":1073.75}},"connectivity":{"status":"connected","effective_type":"4g"},"resource":{"id":"085976fd-1ae4-41f7-9a22-fc65af37c390","type":"js","url":"https://develop.peredeals.com/_next/static/chunks/e685ae08-7d59685da7761772.js","status_code":200,"duration":654600000,"render_blocking_status":"non-blocking","size":1393,"encoded_body_size":572,"decoded_body_size":1393,"transfer_size":872,"download":{"duration":2600000,"start":652000000},"first_byte":{"duration":151100000,"start":500900000}},"type":"resource"}\n{"_dd":{"format_version":2,"drift":0,"configuration":{"session_sample_rate":100,"session_replay_sample_rate":0},"discarded":false},"application":{"id":"e8f0eb7c-481d-4883-9780-316a96c84484"},"date":1723122611134,"service":"fusion-develop-rum","source":"browser","session":{"id":"551357c3-3104-4f81-964d-6d94bfdb7b9c","type":"user"},"view":{"id":"19e52fd3-214b-401a-85f9-b155ace7b3ec","url":"https://develop.peredeals.com/fund/9cgch#overview","referrer":""},"action":{"id":[]},"display":{"viewport":{"width":2378.75,"height":1073.75}},"connectivity":{"status":"connected","effective_type":"4g"},"resource":{"id":"9f8af5d1-6f93-455a-8f1a-735f29f06ad2","type":"js","url":"https://develop.peredeals.com/_next/static/chunks/5103-9029aeb5f0447201.js","status_code":200,"duration":658600000,"render_blocking_status":"non-blocking","size":22614,"encoded_body_size":6257,"decoded_body_size":22614,"transfer_size":6557,"download":{"duration":2800000,"start":655800000},"first_byte":{"duration":154900000,"start":500900000}},"type":"resource"}\n{"_dd":{"format_version":2,"drift":0,"configuration":{"session_sample_rate":100,"session_replay_sample_rate":0},"discarded":false},"application":{"id":"e8f0eb7c-481d-4883-9780-316a96c84484"},"date":1723122611134,"service":"fusion-develop-rum","source":"browser","session":{"id":"551357c3-3104-4f81-964d-6d94bfdb7b9c","type":"user"},"view":{"id":"19e52fd3-214b-401a-85f9-b155ace7b3ec","url":"https://develop.peredeals.com/fund/9cgch#overview","referrer":""},"action":{"id":[]},"display":{"viewport":{"width":2378.75,"height":1073.75}},"connectivity":{"status":"connected","effective_type":"4g"},"resource":{"id":"36191871-a7b5-4626-be50-a8c9651b2852","type":"js","url":"https://develop.peredeals.com/_next/static/chunks/1908-68426910e6f4b8a3.js","status_code":200,"duration":661800000,"render_blocking_status":"non-blocking","size":24021,"encoded_body_size":7987,"decoded_body_size":24021,"transfer_size":8287,"download":{"duration":3600000,"start":658200000},"first_byte":{"duration":156300000,"start":501900000}},"type":"resource"}\n{"_dd":{"format_version":2,"drift":0,"configuration":{"session_sample_rate":100,"session_replay_sample_rate":0},"discarded":false},"application":{"id":"e8f0eb7c-481d-4883-9780-316a96c84484"},"date":1723122611134,"service":"fusion-develop-rum","source":"browser","session":{"id":"551357c3-3104-4f81-964d-6d94bfdb7b9c","type":"user"},"view":{"id":"19e52fd3-214b-401a-85f9-b155ace7b3ec","url":"https://develop.peredeals.com/fund/9cgch#overview","referrer":""},"action":{"id":[]},"display":{"viewport":{"width":2378.75,"height":1073.75}},"connectivity":{"status":"connected","effective_type":"4g"},"resource":{"id":"29d01087-6b8f-47b5-9bde-ad4dc66ddb62","type":"js","url":"https://develop.peredeals.com/_next/static/chunks/3040-fda002565f62d826.js","status_code":200,"duration":792900000,"render_blocking_status":"non-blocking","size":20567,"encoded_body_size":6806,"decoded_body_size":20567,"transfer_size":7106,"download":{"duration":2300000,"start":790600000},"first_byte":{"duration":150000000,"start":640600000}},"type":"resource"}\n{"_dd":{"format_version":2,"drift":0,"configuration":{"session_sample_rate":100,"session_replay_sample_rate":0},"discarded":false},"application":{"id":"e8f0eb7c-481d-4883-9780-316a96c84484"},"date":1723122611134,"service":"fusion-develop-rum","source":"browser","session":{"id":"551357c3-3104-4f81-964d-6d94bfdb7b9c","type":"user"},"view":{"id":"19e52fd3-214b-401a-85f9-b155ace7b3ec","url":"https://develop.peredeals.com/fund/9cgch#overview","referrer":""},"action":{"id":[]},"display":{"viewport":{"width":2378.75,"height":1073.75}},"connectivity":{"status":"connected","effective_type":"4g"},"resource":{"id":"3d5d8a2c-251c-4cf9-803e-3e62edcdf435","type":"js","url":"https://develop.peredeals.com/_next/static/chunks/5136-92691192bb8ca60e.js","status_code":200,"duration":794200000,"render_blocking_status":"non-blocking","size":12705,"encoded_body_size":4985,"decoded_body_size":12705,"transfer_size":5285,"download":{"duration":1500000,"start":792700000},"first_byte":{"duration":150200000,"start":642500000}},"type":"resource"}\n{"_dd":{"format_version":2,"drift":0,"configuration":{"session_sample_rate":100,"session_replay_sample_rate":0},"discarded":false},"application":{"id":"e8f0eb7c-481d-4883-9780-316a96c84484"},"date":1723122611134,"service":"fusion-develop-rum","source":"browser","session":{"id":"551357c3-3104-4f81-964d-6d94bfdb7b9c","type":"user"},"view":{"id":"19e52fd3-214b-401a-85f9-b155ace7b3ec","url":"https://develop.peredeals.com/fund/9cgch#overview","referrer":""},"action":{"id":[]},"display":{"viewport":{"width":2378.75,"height":1073.75}},"connectivity":{"status":"connected","effective_type":"4g"},"resource":{"id":"2b860f78-ad21-40b9-9e2d-67bfaccc1ea7","type":"js","url":"https://develop.peredeals.com/_next/static/chunks/4584-4f712c2963b42d17.js","status_code":200,"duration":892500000,"render_blocking_status":"non-blocking","size":643326,"encoded_body_size":179175,"decoded_body_size":643326,"transfer_size":179475,"download":{"duration":81900000,"start":810600000},"first_byte":{"duration":157100000,"start":653500000}},"type":"resource"}\n{"_dd":{"format_version":2,"drift":0,"configuration":{"session_sample_rate":100,"session_replay_sample_rate":0},"discarded":false},"application":{"id":"e8f0eb7c-481d-4883-9780-316a96c84484"},"date":1723122611134,"service":"fusion-develop-rum","source":"browser","session":{"id":"551357c3-3104-4f81-964d-6d94bfdb7b9c","type":"user"},"view":{"id":"19e52fd3-214b-401a-85f9-b155ace7b3ec","url":"https://develop.peredeals.com/fund/9cgch#overview","referrer":""},"action":{"id":[]},"display":{"viewport":{"width":2378.75,"height":1073.75}},"connectivity":{"status":"connected","effective_type":"4g"},"resource":{"id":"aad66e6f-ec96-439c-b63f-8e3dc1617d97","type":"js","url":"https://develop.peredeals.com/_next/static/chunks/7074-dda1263c5120a501.js","status_code":200,"duration":832300000,"render_blocking_status":"non-blocking","size":172457,"encoded_body_size":38649,"decoded_body_size":172457,"transfer_size":38949,"download":{"duration":18200000,"start":814100000},"first_byte":{"duration":158600000,"start":655500000}},"type":"resource"}\n{"_dd":{"format_version":2,"drift":0,"configuration":{"session_sample_rate":100,"session_replay_sample_rate":0},"discarded":false},"application":{"id":"e8f0eb7c-481d-4883-9780-316a96c84484"},"date":1723122611134,"service":"fusion-develop-rum","source":"browser","session":{"id":"551357c3-3104-4f81-964d-6d94bfdb7b9c","type":"user"},"view":{"id":"19e52fd3-214b-401a-85f9-b155ace7b3ec","url":"https://develop.peredeals.com/fund/9cgch#overview","referrer":""},"action":{"id":[]},"display":{"viewport":{"width":2378.75,"height":1073.75}},"connectivity":{"status":"connected","effective_type":"4g"},"resource":{"id":"1f83c919-7c8f-48e0-aee8-16514039401f","type":"js","url":"https://develop.peredeals.com/_next/static/chunks/268-b1c033fa17b458e4.js","status_code":200,"duration":828500000,"render_blocking_status":"non-blocking","size":10242,"encoded_body_size":4038,"decoded_body_size":10242,"transfer_size":4338,"download":{"duration":5600000,"start":822900000},"first_byte":{"duration":164000000,"start":658900000}},"type":"resource"}\n{"_dd":{"format_version":2,"drift":0,"configuration":{"session_sample_rate":100,"session_replay_sample_rate":0},"discarded":false},"application":{"id":"e8f0eb7c-481d-4883-9780-316a96c84484"},"date":1723122611134,"service":"fusion-develop-rum","source":"browser","session":{"id":"551357c3-3104-4f81-964d-6d94bfdb7b9c","type":"user"},"view":{"id":"19e52fd3-214b-401a-85f9-b155ace7b3ec","url":"https://develop.peredeals.com/fund/9cgch#overview","referrer":""},"action":{"id":[]},"display":{"viewport":{"width":2378.75,"height":1073.75}},"connectivity":{"status":"connected","effective_type":"4g"},"resource":{"id":"91624022-442e-4867-8105-a0c89a32fc10","type":"js","url":"https://develop.peredeals.com/_next/static/chunks/2516-c6fcd07a0f997299.js","status_code":200,"duration":874400000,"render_blocking_status":"non-blocking","size":195517,"encoded_body_size":64163,"decoded_body_size":195517,"transfer_size":64463,"download":{"duration":30800000,"start":843600000},"first_byte":{"duration":179900000,"start":663700000}},"type":"resource"}\n{"_dd":{"format_version":2,"drift":0,"configuration":{"session_sample_rate":100,"session_replay_sample_rate":0},"discarded":false},"application":{"id":"e8f0eb7c-481d-4883-9780-316a96c84484"},"date":1723122611134,"service":"fusion-develop-rum","source":"browser","session":{"id":"551357c3-3104-4f81-964d-6d94bfdb7b9c","type":"user"},"view":{"id":"19e52fd3-214b-401a-85f9-b155ace7b3ec","url":"https://develop.peredeals.com/fund/9cgch#overview","referrer":""},"action":{"id":[]},"display":{"viewport":{"width":2378.75,"height":1073.75}},"connectivity":{"status":"connected","effective_type":"4g"},"resource":{"id":"141aadc5-c75e-4ab3-93a0-b88a428138c6","type":"js","url":"https://develop.peredeals.com/_next/static/chunks/3905-d85f96d49425530d.js","status_code":200,"duration":947900000,"render_blocking_status":"non-blocking","size":24012,"encoded_body_size":7596,"decoded_body_size":24012,"transfer_size":7896,"download":{"duration":3200000,"start":944700000},"first_byte":{"duration":151200000,"start":793500000}},"type":"resource"}\n{"_dd":{"format_version":2,"drift":0,"configuration":{"session_sample_rate":100,"session_replay_sample_rate":0},"discarded":false},"application":{"id":"e8f0eb7c-481d-4883-9780-316a96c84484"},"date":1723122611134,"service":"fusion-develop-rum","source":"browser","session":{"id":"551357c3-3104-4f81-964d-6d94bfdb7b9c","type":"user"},"view":{"id":"19e52fd3-214b-401a-85f9-b155ace7b3ec","url":"https://develop.peredeals.com/fund/9cgch#overview","referrer":""},"action":{"id":[]},"display":{"viewport":{"width":2378.75,"height":1073.75}},"connectivity":{"status":"connected","effective_type":"4g"},"resource":{"id":"866ad60b-7565-4d8f-b0b6-7acfd2511d4b","type":"js","url":"https://develop.peredeals.com/_next/static/chunks/2981-fadf6db2bd6c7aba.js","status_code":200,"duration":956700000,"render_blocking_status":"non-blocking","size":65024,"encoded_body_size":17504,"decoded_body_size":65024,"transfer_size":17804,"download":{"duration":5700000,"start":951000000},"first_byte":{"duration":155100000,"start":795900000}},"type":"resource"}\n{"_dd":{"format_version":2,"drift":0,"configuration":{"session_sample_rate":100,"session_replay_sample_rate":0},"discarded":false},"application":{"id":"e8f0eb7c-481d-4883-9780-316a96c84484"},"date":1723122611134,"service":"fusion-develop-rum","source":"browser","session":{"id":"551357c3-3104-4f81-964d-6d94bfdb7b9c","type":"user"},"view":{"id":"19e52fd3-214b-401a-85f9-b155ace7b3ec","url":"https://develop.peredeals.com/fund/9cgch#overview","referrer":""},"action":{"id":[]},"display":{"viewport":{"width":2378.75,"height":1073.75}},"connectivity":{"status":"connected","effective_type":"4g"},"resource":{"id":"6d0021cf-c731-4100-97f8-143f40022cde","type":"js","url":"https://develop.peredeals.com/_next/static/chunks/2467-2027c0870ef880cb.js","status_code":200,"duration":984000000,"render_blocking_status":"non-blocking","size":14144,"encoded_body_size":4404,"decoded_body_size":14144,"transfer_size":4704,"download":{"duration":1200000,"start":982800000},"first_byte":{"duration":151500000,"start":831300000}},"type":"resource"}',
      {
        headers: {
          'content-type': 'text/plain;charset=UTF-8',
          referer: 'https://develop.peredeals.com/',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get('https://develop.peredeals.com/api/session', {
      headers: {
        referer: 'https://develop.peredeals.com/fund/9cgch',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
        'content-type': 'application/json',
        'sec-ch-ua': '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.post(
      'https://develop.peredeals.com/api/proxy',
      '{"url":"/api/fund/9cgch/regions?brand=peredeals","method":"GET"}',
      {
        headers: {
          'content-type': 'application/json',
          referer: 'https://develop.peredeals.com/fund/9cgch',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.post(
      'https://develop.peredeals.com/api/proxy',
      '{"url":"/api/fund/9cgch/sectors?brand=peredeals","method":"GET"}',
      {
        headers: {
          'content-type': 'application/json',
          referer: 'https://develop.peredeals.com/fund/9cgch',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.post(
      'https://develop.peredeals.com/api/proxy',
      '{"url":"/api/fund/9cgch/strategies?brand=peredeals","method":"GET"}',
      {
        headers: {
          'content-type': 'application/json',
          referer: 'https://develop.peredeals.com/fund/9cgch',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.post(
      'https://develop.peredeals.com/api/proxy',
      '{"url":"/api/fund/9cgch/deals","method":"POST","body":"{\\"sort\\":{\\"sortBy\\":\\"date\\",\\"sortOrder\\":\\"desc\\"},\\"pagination\\":{\\"page\\":1,\\"size\\":10},\\"filters\\":{}}"}',
      {
        headers: {
          'content-type': 'application/json',
          referer: 'https://develop.peredeals.com/fund/9cgch',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get('https://develop.peredeals.com/?_rsc=111jc', {
      headers: {
        'next-router-prefetch': '1',
        'next-router-state-tree':
          '%5B%22%22%2C%7B%22children%22%3A%5B%22(shared-pages)%22%2C%7B%22children%22%3A%5B%22fund%22%2C%7B%22children%22%3A%5B%5B%22id%22%2C%229cgch%22%2C%22d%22%5D%2C%7B%22children%22%3A%5B%22__PAGE__%22%2C%7B%7D%5D%7D%5D%7D%5D%7D%5D%7D%2Cnull%2Cnull%2Ctrue%5D',
        'next-url': '/fund/9cgch',
        rsc: '1',
        referer: 'https://develop.peredeals.com/fund/9cgch',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://develop.peredeals.com/network-hub?_rsc=111jc', {
      headers: {
        'next-router-prefetch': '1',
        'next-router-state-tree':
          '%5B%22%22%2C%7B%22children%22%3A%5B%22(shared-pages)%22%2C%7B%22children%22%3A%5B%22fund%22%2C%7B%22children%22%3A%5B%5B%22id%22%2C%229cgch%22%2C%22d%22%5D%2C%7B%22children%22%3A%5B%22__PAGE__%22%2C%7B%7D%5D%7D%5D%7D%5D%7D%5D%7D%2Cnull%2Cnull%2Ctrue%5D',
        'next-url': '/fund/9cgch',
        rsc: '1',
        referer: 'https://develop.peredeals.com/fund/9cgch',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.post(
      'https://browser-intake-datadoghq.eu/api/v2/rum?ddsource=browser&ddtags=sdk_version%3A5.21.0%2Capi%3Afetch%2Cenv%3Adevelop%2Cservice%3Afusion-develop-rum&dd-api-key=pub23d14632f753ff51ae3a0a895ef751e3&dd-evp-origin-version=5.21.0&dd-evp-origin=browser&dd-request-id=d51e2127-c2e8-42f4-b9bd-74e9d35fa8fa&batch_time=1723122612556',
      '{"_dd":{"format_version":2,"drift":0,"configuration":{"session_sample_rate":100,"session_replay_sample_rate":0},"discarded":false},"application":{"id":"e8f0eb7c-481d-4883-9780-316a96c84484"},"date":1723122611134,"service":"fusion-develop-rum","source":"browser","session":{"id":"551357c3-3104-4f81-964d-6d94bfdb7b9c","type":"user"},"view":{"id":"19e52fd3-214b-401a-85f9-b155ace7b3ec","url":"https://develop.peredeals.com/fund/9cgch#overview","referrer":""},"action":{"id":[]},"display":{"viewport":{"width":2378.75,"height":1073.75}},"connectivity":{"status":"connected","effective_type":"4g"},"resource":{"id":"2ae99b80-9d64-4a60-8283-055c31a7d616","type":"js","url":"https://develop.peredeals.com/_next/static/chunks/app/layout-48cdbeaed6132cfa.js","status_code":200,"duration":987700000,"render_blocking_status":"non-blocking","size":17322,"encoded_body_size":5478,"decoded_body_size":17322,"transfer_size":5778,"download":{"duration":2900000,"start":984800000},"first_byte":{"duration":150000000,"start":834800000}},"type":"resource"}\n{"_dd":{"format_version":2,"drift":0,"configuration":{"session_sample_rate":100,"session_replay_sample_rate":0},"discarded":false},"application":{"id":"e8f0eb7c-481d-4883-9780-316a96c84484"},"date":1723122611135,"service":"fusion-develop-rum","source":"browser","session":{"id":"551357c3-3104-4f81-964d-6d94bfdb7b9c","type":"user"},"view":{"id":"19e52fd3-214b-401a-85f9-b155ace7b3ec","url":"https://develop.peredeals.com/fund/9cgch#overview","referrer":""},"action":{"id":[]},"display":{"viewport":{"width":2378.75,"height":1073.75}},"connectivity":{"status":"connected","effective_type":"4g"},"resource":{"id":"7d5a3367-d3bc-4570-b709-4a424eaa681e","type":"js","url":"https://consent.cookiebot.com/uc.js","duration":374900000,"render_blocking_status":"non-blocking"},"type":"resource"}\n{"_dd":{"format_version":2,"drift":0,"configuration":{"session_sample_rate":100,"session_replay_sample_rate":0},"discarded":false},"application":{"id":"e8f0eb7c-481d-4883-9780-316a96c84484"},"date":1723122611316,"service":"fusion-develop-rum","source":"browser","session":{"id":"551357c3-3104-4f81-964d-6d94bfdb7b9c","type":"user"},"view":{"id":"19e52fd3-214b-401a-85f9-b155ace7b3ec","url":"https://develop.peredeals.com/fund/9cgch#overview","referrer":""},"action":{"id":[]},"display":{"viewport":{"width":2378.75,"height":1073.75}},"connectivity":{"status":"connected","effective_type":"4g"},"resource":{"id":"3c0afec3-7642-4e9b-908a-966b26e9b16a","type":"other","url":"https://develop.peredeals.com/_next/static/media/DuNord-Bold.640b7755.otf","status_code":200,"duration":304300000,"render_blocking_status":"non-blocking","size":193476,"encoded_body_size":83394,"decoded_body_size":193476,"transfer_size":83694,"download":{"duration":126900000,"start":177400000},"first_byte":{"duration":172200000,"start":5200000}},"type":"resource"}\n{"_dd":{"format_version":2,"drift":0,"configuration":{"session_sample_rate":100,"session_replay_sample_rate":0},"discarded":false},"application":{"id":"e8f0eb7c-481d-4883-9780-316a96c84484"},"date":1723122611316,"service":"fusion-develop-rum","source":"browser","session":{"id":"551357c3-3104-4f81-964d-6d94bfdb7b9c","type":"user"},"view":{"id":"19e52fd3-214b-401a-85f9-b155ace7b3ec","url":"https://develop.peredeals.com/fund/9cgch#overview","referrer":""},"action":{"id":[]},"display":{"viewport":{"width":2378.75,"height":1073.75}},"connectivity":{"status":"connected","effective_type":"4g"},"resource":{"id":"16ee8008-9adc-4fbe-ab74-ebf62b73692d","type":"other","url":"https://develop.peredeals.com/_next/static/media/DuNord-Regular.14742010.otf","status_code":200,"duration":304600000,"render_blocking_status":"non-blocking","size":192480,"encoded_body_size":83678,"decoded_body_size":192480,"transfer_size":83978,"download":{"duration":117200000,"start":187400000},"first_byte":{"duration":182100000,"start":5300000}},"type":"resource"}\n{"_dd":{"format_version":2,"drift":0,"configuration":{"session_sample_rate":100,"session_replay_sample_rate":0},"discarded":false},"application":{"id":"e8f0eb7c-481d-4883-9780-316a96c84484"},"date":1723122611134,"service":"fusion-develop-rum","source":"browser","session":{"id":"551357c3-3104-4f81-964d-6d94bfdb7b9c","type":"user"},"view":{"id":"19e52fd3-214b-401a-85f9-b155ace7b3ec","url":"https://develop.peredeals.com/fund/9cgch#overview","referrer":""},"action":{"id":[]},"display":{"viewport":{"width":2378.75,"height":1073.75}},"connectivity":{"status":"connected","effective_type":"4g"},"resource":{"id":"70f64b74-ccf1-40bb-93a3-18f70717bea9","type":"js","url":"https://develop.peredeals.com/_next/static/chunks/3296-19dabb34f2abf51c.js","status_code":200,"duration":1027900000,"render_blocking_status":"non-blocking","size":21351,"encoded_body_size":3018,"decoded_body_size":21351,"transfer_size":3318,"download":{"duration":1300000,"start":1026600000},"first_byte":{"duration":150500000,"start":876100000}},"type":"resource"}\n{"_dd":{"format_version":2,"drift":-1,"configuration":{"session_sample_rate":100,"session_replay_sample_rate":0},"discarded":false},"application":{"id":"e8f0eb7c-481d-4883-9780-316a96c84484"},"date":1723122611135,"service":"fusion-develop-rum","source":"browser","session":{"id":"551357c3-3104-4f81-964d-6d94bfdb7b9c","type":"user"},"view":{"id":"19e52fd3-214b-401a-85f9-b155ace7b3ec","url":"https://develop.peredeals.com/fund/9cgch#overview","referrer":""},"action":{"id":[]},"display":{"viewport":{"width":2378.75,"height":1073.75}},"connectivity":{"status":"connected","effective_type":"4g"},"resource":{"id":"3f19d4eb-533d-4ba2-89fd-a713a924e02e","type":"js","url":"https://develop.peredeals.com/_next/static/chunks/app/(shared-pages)/fund/%5Bid%5D/page-d43cd5701d583dbc.js","status_code":200,"duration":1047800000,"render_blocking_status":"non-blocking","size":9525,"encoded_body_size":3573,"decoded_body_size":9525,"transfer_size":3873,"download":{"duration":2000000,"start":1045800000},"first_byte":{"duration":151500000,"start":894300000}},"type":"resource"}\n{"_dd":{"format_version":2,"drift":0,"configuration":{"session_sample_rate":100,"session_replay_sample_rate":0},"discarded":false},"application":{"id":"e8f0eb7c-481d-4883-9780-316a96c84484"},"date":1723122611135,"service":"fusion-develop-rum","source":"browser","session":{"id":"551357c3-3104-4f81-964d-6d94bfdb7b9c","type":"user"},"view":{"id":"19e52fd3-214b-401a-85f9-b155ace7b3ec","url":"https://develop.peredeals.com/fund/9cgch#overview","referrer":""},"action":{"id":[]},"display":{"viewport":{"width":2378.75,"height":1073.75}},"connectivity":{"status":"connected","effective_type":"4g"},"resource":{"id":"456a6b18-1af8-410d-b80c-0195b09306f2","type":"js","url":"https://develop.peredeals.com/_next/static/chunks/app/error-cf7b91c63e2a7a3b.js","status_code":200,"duration":1100400000,"render_blocking_status":"non-blocking","size":5132,"encoded_body_size":2169,"decoded_body_size":5132,"transfer_size":2469,"download":{"duration":500000,"start":1099900000},"first_byte":{"duration":150600000,"start":949300000}},"type":"resource"}\n{"_dd":{"format_version":2,"drift":-1,"configuration":{"session_sample_rate":100,"session_replay_sample_rate":0},"discarded":false},"application":{"id":"e8f0eb7c-481d-4883-9780-316a96c84484"},"date":1723122611135,"service":"fusion-develop-rum","source":"browser","session":{"id":"551357c3-3104-4f81-964d-6d94bfdb7b9c","type":"user"},"view":{"id":"19e52fd3-214b-401a-85f9-b155ace7b3ec","url":"https://develop.peredeals.com/fund/9cgch#overview","referrer":""},"action":{"id":[]},"display":{"viewport":{"width":2378.75,"height":1073.75}},"connectivity":{"status":"connected","effective_type":"4g"},"resource":{"id":"37124742-2586-421a-88fa-ae9576c0186f","type":"js","url":"https://develop.peredeals.com/_next/static/chunks/app/global-error-09812196c44c7062.js","status_code":200,"duration":1110800000,"render_blocking_status":"non-blocking","size":4227,"encoded_body_size":1843,"decoded_body_size":4227,"transfer_size":2143,"download":{"duration":900000,"start":1109900000},"first_byte":{"duration":151800000,"start":958100000}},"type":"resource"}\n{"_dd":{"format_version":2,"drift":0,"configuration":{"session_sample_rate":100,"session_replay_sample_rate":0},"discarded":false},"application":{"id":"e8f0eb7c-481d-4883-9780-316a96c84484"},"date":1723122611320,"service":"fusion-develop-rum","source":"browser","session":{"id":"551357c3-3104-4f81-964d-6d94bfdb7b9c","type":"user"},"view":{"id":"19e52fd3-214b-401a-85f9-b155ace7b3ec","url":"https://develop.peredeals.com/fund/9cgch#overview","referrer":""},"action":{"id":[]},"display":{"viewport":{"width":2378.75,"height":1073.75}},"connectivity":{"status":"connected","effective_type":"4g"},"resource":{"id":"8f3de783-82d6-48f0-aedd-87d6407efa02","type":"image","url":"https://develop.peredeals.com/assets/vertical-bars.svg","status_code":200,"duration":952200000,"render_blocking_status":"non-blocking","size":3366,"encoded_body_size":977,"decoded_body_size":3366,"transfer_size":1277,"download":{"duration":1200000,"start":951000000},"first_byte":{"duration":151600000,"start":799400000}},"type":"resource"}\n{"_dd":{"format_version":2,"drift":-1,"configuration":{"session_sample_rate":100,"session_replay_sample_rate":0},"discarded":false},"application":{"id":"e8f0eb7c-481d-4883-9780-316a96c84484"},"date":1723122611320,"service":"fusion-develop-rum","source":"browser","session":{"id":"551357c3-3104-4f81-964d-6d94bfdb7b9c","type":"user"},"view":{"id":"19e52fd3-214b-401a-85f9-b155ace7b3ec","url":"https://develop.peredeals.com/fund/9cgch#overview","referrer":""},"action":{"id":[]},"display":{"viewport":{"width":2378.75,"height":1073.75}},"connectivity":{"status":"connected","effective_type":"4g"},"resource":{"id":"5c814c8e-4e25-485b-9431-711f0f6571c9","type":"image","url":"https://develop.peredeals.com/logo/pei-group-logo.svg","status_code":200,"duration":954200000,"render_blocking_status":"non-blocking","size":8161,"encoded_body_size":5182,"decoded_body_size":8161,"transfer_size":5482,"download":{"duration":1400000,"start":952800000},"first_byte":{"duration":149600000,"start":803200000}},"type":"resource"}\n{"_dd":{"format_version":2,"drift":0,"configuration":{"session_sample_rate":100,"session_replay_sample_rate":0},"discarded":false},"application":{"id":"e8f0eb7c-481d-4883-9780-316a96c84484"},"date":1723122612279,"service":"fusion-develop-rum","source":"browser","session":{"id":"551357c3-3104-4f81-964d-6d94bfdb7b9c","type":"user"},"view":{"id":"19e52fd3-214b-401a-85f9-b155ace7b3ec","url":"https://develop.peredeals.com/fund/9cgch#overview","referrer":""},"action":{"id":[]},"display":{"viewport":{"width":2378.75,"height":1073.75}},"connectivity":{"status":"connected","effective_type":"4g"},"resource":{"id":"23bbdfa1-e890-4d29-9e83-519b53122a75","type":"fetch","duration":188900000,"method":"POST","status_code":200,"url":"https://develop.peredeals.com/api/proxy","render_blocking_status":"non-blocking","size":332,"encoded_body_size":332,"decoded_body_size":332,"transfer_size":632,"download":{"duration":600000,"start":188300000},"first_byte":{"duration":181500000,"start":6800000}},"type":"resource"}\n{"_dd":{"format_version":2,"drift":0,"configuration":{"session_sample_rate":100,"session_replay_sample_rate":0},"discarded":false},"application":{"id":"e8f0eb7c-481d-4883-9780-316a96c84484"},"date":1723122612284,"service":"fusion-develop-rum","source":"browser","session":{"id":"551357c3-3104-4f81-964d-6d94bfdb7b9c","type":"user"},"view":{"id":"19e52fd3-214b-401a-85f9-b155ace7b3ec","url":"https://develop.peredeals.com/fund/9cgch#overview","referrer":""},"action":{"id":[]},"display":{"viewport":{"width":2378.75,"height":1073.75}},"connectivity":{"status":"connected","effective_type":"4g"},"resource":{"id":"4f989761-2742-4b55-a07d-4c3a99f91d9e","type":"fetch","duration":211400000,"method":"POST","status_code":201,"url":"https://develop.peredeals.com/api/proxy","render_blocking_status":"non-blocking","size":3659,"encoded_body_size":3659,"decoded_body_size":3659,"transfer_size":3959,"download":{"duration":700000,"start":210700000},"first_byte":{"duration":203100000,"start":7600000}},"type":"resource"}\n{"_dd":{"format_version":2,"drift":0,"configuration":{"session_sample_rate":100,"session_replay_sample_rate":0},"discarded":false},"application":{"id":"e8f0eb7c-481d-4883-9780-316a96c84484"},"date":1723122612321,"service":"fusion-develop-rum","source":"browser","session":{"id":"551357c3-3104-4f81-964d-6d94bfdb7b9c","type":"user"},"view":{"id":"19e52fd3-214b-401a-85f9-b155ace7b3ec","url":"https://develop.peredeals.com/fund/9cgch#overview","referrer":""},"action":{"id":[]},"display":{"viewport":{"width":2378.75,"height":1073.75}},"connectivity":{"status":"connected","effective_type":"4g"},"resource":{"id":"3471c47f-ee82-456e-bd30-43c8120f6036","type":"fetch","duration":194200000,"method":"GET","status_code":404,"url":"https://develop.peredeals.com/?_rsc=111jc","render_blocking_status":"non-blocking","size":80,"encoded_body_size":87,"decoded_body_size":80,"transfer_size":387,"download":{"duration":25800000,"start":168400000},"first_byte":{"duration":167000000,"start":1400000}},"type":"resource"}\n{"_dd":{"format_version":2,"drift":0,"configuration":{"session_sample_rate":100,"session_replay_sample_rate":0},"discarded":false},"application":{"id":"e8f0eb7c-481d-4883-9780-316a96c84484"},"date":1723122612277,"service":"fusion-develop-rum","source":"browser","session":{"id":"551357c3-3104-4f81-964d-6d94bfdb7b9c","type":"user"},"view":{"id":"19e52fd3-214b-401a-85f9-b155ace7b3ec","url":"https://develop.peredeals.com/fund/9cgch#overview","referrer":""},"action":{"id":[]},"display":{"viewport":{"width":2378.75,"height":1073.75}},"connectivity":{"status":"connected","effective_type":"4g"},"resource":{"id":"0507924b-2154-437e-b11e-5aff4a3ee295","type":"fetch","duration":243600000,"method":"GET","status_code":200,"url":"https://develop.peredeals.com/api/session","render_blocking_status":"non-blocking","size":18,"encoded_body_size":18,"decoded_body_size":18,"transfer_size":318,"download":{"duration":900000,"start":242700000},"first_byte":{"duration":236200000,"start":6500000}},"type":"resource"}\n{"_dd":{"format_version":2,"drift":0,"configuration":{"session_sample_rate":100,"session_replay_sample_rate":0},"discarded":false},"application":{"id":"e8f0eb7c-481d-4883-9780-316a96c84484"},"date":1723122612281,"service":"fusion-develop-rum","source":"browser","session":{"id":"551357c3-3104-4f81-964d-6d94bfdb7b9c","type":"user"},"view":{"id":"19e52fd3-214b-401a-85f9-b155ace7b3ec","url":"https://develop.peredeals.com/fund/9cgch#overview","referrer":""},"action":{"id":[]},"display":{"viewport":{"width":2378.75,"height":1073.75}},"connectivity":{"status":"connected","effective_type":"4g"},"resource":{"id":"f6f721dc-8f17-4e08-a3fe-11c55edc7acd","type":"fetch","duration":268300000,"method":"POST","status_code":200,"url":"https://develop.peredeals.com/api/proxy","render_blocking_status":"non-blocking","size":410,"encoded_body_size":410,"decoded_body_size":410,"transfer_size":710,"download":{"duration":900000,"start":267400000},"first_byte":{"duration":258400000,"start":9000000}},"type":"resource"}\n{"_dd":{"format_version":2,"drift":0,"configuration":{"session_sample_rate":100,"session_replay_sample_rate":0},"discarded":false},"application":{"id":"e8f0eb7c-481d-4883-9780-316a96c84484"},"date":1723122612323,"service":"fusion-develop-rum","source":"browser","session":{"id":"551357c3-3104-4f81-964d-6d94bfdb7b9c","type":"user"},"view":{"id":"19e52fd3-214b-401a-85f9-b155ace7b3ec","url":"https://develop.peredeals.com/fund/9cgch#overview","referrer":""},"action":{"id":[]},"display":{"viewport":{"width":2378.75,"height":1073.75}},"connectivity":{"status":"connected","effective_type":"4g"},"resource":{"id":"6ca9c506-524c-4307-988c-878aed774c81","type":"fetch","duration":231300000,"method":"GET","status_code":200,"url":"https://develop.peredeals.com/network-hub?_rsc=111jc","render_blocking_status":"non-blocking","size":140,"encoded_body_size":126,"decoded_body_size":140,"transfer_size":426,"download":{"duration":58000000,"start":173300000},"first_byte":{"duration":172300000,"start":1000000}},"type":"resource"}',
      {
        headers: {
          'content-type': 'text/plain;charset=UTF-8',
          referer: 'https://develop.peredeals.com/',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://consentcdn.cookiebot.com/consentconfig/0cab4149-174b-4765-85b6-f1223324928a/settings.json',
      {
        headers: {
          referer: 'https://develop.peredeals.com/',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://consentcdn.cookiebot.com/consentconfig/0cab4149-174b-4765-85b6-f1223324928a/state.js',
      {
        headers: {
          referer: 'https://develop.peredeals.com/',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
  })

  group('page_2 - https://develop.peredeals.com/fund/9cgch#deals', function () {
    response = http.post(
      'https://develop.peredeals.com/api/proxy',
      '{"url":"/api/fund/9cgch/deals","method":"POST","body":"{\\"sort\\":{\\"sortBy\\":\\"date\\",\\"sortOrder\\":\\"desc\\"},\\"pagination\\":{\\"page\\":2,\\"size\\":10},\\"filters\\":{}}"}',
      {
        headers: {
          'content-type': 'application/json',
          referer: 'https://develop.peredeals.com/fund/9cgch',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get('https://develop.peredeals.com/passwordless-access?_rsc=111jc', {
      headers: {
        'next-router-prefetch': '1',
        'next-router-state-tree':
          '%5B%22%22%2C%7B%22children%22%3A%5B%22(shared-pages)%22%2C%7B%22children%22%3A%5B%22fund%22%2C%7B%22children%22%3A%5B%5B%22id%22%2C%229cgch%22%2C%22d%22%5D%2C%7B%22children%22%3A%5B%22__PAGE__%22%2C%7B%7D%5D%7D%5D%7D%5D%7D%5D%7D%2Cnull%2Cnull%2Ctrue%5D',
        'next-url': '/fund/9cgch',
        rsc: '1',
        referer: 'https://develop.peredeals.com/fund/9cgch',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://develop.peredeals.com/privacy-notice?_rsc=111jc', {
      headers: {
        'next-router-prefetch': '1',
        'next-router-state-tree':
          '%5B%22%22%2C%7B%22children%22%3A%5B%22(shared-pages)%22%2C%7B%22children%22%3A%5B%22fund%22%2C%7B%22children%22%3A%5B%5B%22id%22%2C%229cgch%22%2C%22d%22%5D%2C%7B%22children%22%3A%5B%22__PAGE__%22%2C%7B%7D%5D%7D%5D%7D%5D%7D%5D%7D%2Cnull%2Cnull%2Ctrue%5D',
        'next-url': '/fund/9cgch',
        rsc: '1',
        referer: 'https://develop.peredeals.com/fund/9cgch',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://develop.peredeals.com/cookie-policy?_rsc=111jc', {
      headers: {
        'next-router-prefetch': '1',
        'next-router-state-tree':
          '%5B%22%22%2C%7B%22children%22%3A%5B%22(shared-pages)%22%2C%7B%22children%22%3A%5B%22fund%22%2C%7B%22children%22%3A%5B%5B%22id%22%2C%229cgch%22%2C%22d%22%5D%2C%7B%22children%22%3A%5B%22__PAGE__%22%2C%7B%7D%5D%7D%5D%7D%5D%7D%5D%7D%2Cnull%2Cnull%2Ctrue%5D',
        'next-url': '/fund/9cgch',
        rsc: '1',
        referer: 'https://develop.peredeals.com/fund/9cgch',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://develop.peredeals.com/terms-conditions?_rsc=111jc', {
      headers: {
        'next-router-prefetch': '1',
        'next-router-state-tree':
          '%5B%22%22%2C%7B%22children%22%3A%5B%22(shared-pages)%22%2C%7B%22children%22%3A%5B%22fund%22%2C%7B%22children%22%3A%5B%5B%22id%22%2C%229cgch%22%2C%22d%22%5D%2C%7B%22children%22%3A%5B%22__PAGE__%22%2C%7B%7D%5D%7D%5D%7D%5D%7D%5D%7D%2Cnull%2Cnull%2Ctrue%5D',
        'next-url': '/fund/9cgch',
        rsc: '1',
        referer: 'https://develop.peredeals.com/fund/9cgch',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.post(
      'https://browser-intake-datadoghq.eu/api/v2/rum?ddsource=browser&ddtags=sdk_version%3A5.21.0%2Capi%3Afetch%2Cenv%3Adevelop%2Cservice%3Afusion-develop-rum&dd-api-key=pub23d14632f753ff51ae3a0a895ef751e3&dd-evp-origin-version=5.21.0&dd-evp-origin=browser&dd-request-id=1b5621b8-6911-452d-b53b-bd95dfa5ddb3&batch_time=1723122621621',
      '{"_dd":{"format_version":2,"drift":0,"configuration":{"session_sample_rate":100,"session_replay_sample_rate":0},"discarded":false},"application":{"id":"e8f0eb7c-481d-4883-9780-316a96c84484"},"date":1723122612283,"service":"fusion-develop-rum","source":"browser","session":{"id":"551357c3-3104-4f81-964d-6d94bfdb7b9c","type":"user"},"view":{"id":"19e52fd3-214b-401a-85f9-b155ace7b3ec","url":"https://develop.peredeals.com/fund/9cgch#overview","referrer":""},"action":{"id":[]},"display":{"viewport":{"width":2378.75,"height":1073.75}},"connectivity":{"status":"connected","effective_type":"4g"},"resource":{"id":"71533138-fa36-46a1-bef3-9d62c5ad1cdc","type":"fetch","duration":270800000,"method":"POST","status_code":200,"url":"https://develop.peredeals.com/api/proxy","render_blocking_status":"non-blocking","size":388,"encoded_body_size":388,"decoded_body_size":388,"transfer_size":688,"download":{"duration":400000,"start":270400000},"first_byte":{"duration":261900000,"start":8500000}},"type":"resource"}\n{"_dd":{"format_version":2,"drift":0,"configuration":{"session_sample_rate":100,"session_replay_sample_rate":0},"discarded":false},"application":{"id":"e8f0eb7c-481d-4883-9780-316a96c84484"},"date":1723122612305,"service":"fusion-develop-rum","source":"browser","session":{"id":"551357c3-3104-4f81-964d-6d94bfdb7b9c","type":"user"},"view":{"id":"19e52fd3-214b-401a-85f9-b155ace7b3ec","url":"https://develop.peredeals.com/fund/9cgch#overview","referrer":""},"action":{"id":[]},"display":{"viewport":{"width":2378.75,"height":1073.75}},"connectivity":{"status":"connected","effective_type":"4g"},"resource":{"id":"3efa79e6-4776-4141-9f35-ca942580616e","type":"other","url":"https://consentcdn.cookiebot.com/sdk/bc-v4.min.html","duration":713800000,"render_blocking_status":"non-blocking"},"type":"resource"}\n{"_dd":{"format_version":2,"drift":0,"configuration":{"session_sample_rate":100,"session_replay_sample_rate":0},"discarded":false},"application":{"id":"e8f0eb7c-481d-4883-9780-316a96c84484"},"date":1723122613059,"service":"fusion-develop-rum","source":"browser","session":{"id":"551357c3-3104-4f81-964d-6d94bfdb7b9c","type":"user"},"view":{"id":"19e52fd3-214b-401a-85f9-b155ace7b3ec","url":"https://develop.peredeals.com/fund/9cgch#overview","referrer":""},"action":{"id":[]},"display":{"viewport":{"width":2378.75,"height":1073.75}},"connectivity":{"status":"connected","effective_type":"4g"},"resource":{"id":"f583d901-1a0c-4269-9f34-397c4e04a0ba","type":"js","url":"https://consentcdn.cookiebot.com/consentconfig/0cab4149-174b-4765-85b6-f1223324928a/state.js","duration":360900000,"render_blocking_status":"non-blocking"},"type":"resource"}\n{"_dd":{"format_version":2,"drift":0,"configuration":{"session_sample_rate":100,"session_replay_sample_rate":0},"discarded":false},"application":{"id":"e8f0eb7c-481d-4883-9780-316a96c84484"},"date":1723122613055,"service":"fusion-develop-rum","source":"browser","session":{"id":"551357c3-3104-4f81-964d-6d94bfdb7b9c","type":"user"},"view":{"id":"19e52fd3-214b-401a-85f9-b155ace7b3ec","url":"https://develop.peredeals.com/fund/9cgch#overview","referrer":""},"action":{"id":[]},"display":{"viewport":{"width":2378.75,"height":1073.75}},"connectivity":{"status":"connected","effective_type":"4g"},"resource":{"id":"47095765-cd13-445c-ac36-216bca6fe59b","type":"xhr","duration":384000000,"method":"GET","status_code":200,"url":"https://consentcdn.cookiebot.com/consentconfig/0cab4149-174b-4765-85b6-f1223324928a/settings.json"},"type":"resource"}\n{"_dd":{"format_version":2,"drift":0,"configuration":{"session_sample_rate":100,"session_replay_sample_rate":0},"action":{"target":{"width":63,"height":32,"selector":"DIV[data-testid=\\"vertical-Deals\\"]>SPAN.cursor-pointer"},"position":{"x":18,"y":12}}},"application":{"id":"e8f0eb7c-481d-4883-9780-316a96c84484"},"date":1723122614489,"service":"fusion-develop-rum","source":"browser","session":{"id":"551357c3-3104-4f81-964d-6d94bfdb7b9c","type":"user"},"view":{"id":"19e52fd3-214b-401a-85f9-b155ace7b3ec","url":"https://develop.peredeals.com/fund/9cgch#overview","referrer":"","in_foreground":true},"action":{"id":"b35ecda3-2b1b-4667-87ab-139ba2d9c27b","target":{"name":"Deals"},"type":"click","loading_time":3000000,"frustration":{"type":[]},"error":{"count":0},"long_task":{"count":0},"resource":{"count":0}},"display":{"viewport":{"width":2378.75,"height":1073.75}},"connectivity":{"status":"connected","effective_type":"4g"},"type":"action"}\n{"_dd":{"format_version":2,"drift":0,"configuration":{"session_sample_rate":100,"session_replay_sample_rate":0},"action":{"target":{"width":779,"height":20,"selector":"#deals-section>DIV.w-full>DIV.rounded-md>DIV.relative>TABLE.w-full>TBODY.relative>TR:nth-of-type(1)>TD:nth-of-type(1)>DIV.text-left"},"position":{"x":148,"y":4}}},"application":{"id":"e8f0eb7c-481d-4883-9780-316a96c84484"},"date":1723122616835,"service":"fusion-develop-rum","source":"browser","session":{"id":"551357c3-3104-4f81-964d-6d94bfdb7b9c","type":"user"},"view":{"id":"a25b892b-1678-4001-af75-c06182afd791","url":"https://develop.peredeals.com/fund/9cgch#deals","referrer":"https://develop.peredeals.com/fund/9cgch#overview","in_foreground":true},"action":{"id":"7bc80b2f-a055-48ec-a7d7-e1affd9b9778","target":{"name":"Albany Road Real Estate Partners Buys Crouse Medical Center for 2000000"},"type":"click","frustration":{"type":["dead_click"]},"error":{"count":0},"long_task":{"count":0},"resource":{"count":0}},"display":{"viewport":{"width":2378.75,"height":1073.75}},"connectivity":{"status":"connected","effective_type":"4g"},"type":"action"}\n{"_dd":{"format_version":2,"drift":0,"configuration":{"session_sample_rate":100,"session_replay_sample_rate":0},"discarded":false},"application":{"id":"e8f0eb7c-481d-4883-9780-316a96c84484"},"date":1723122619800,"service":"fusion-develop-rum","source":"browser","session":{"id":"551357c3-3104-4f81-964d-6d94bfdb7b9c","type":"user"},"view":{"id":"a25b892b-1678-4001-af75-c06182afd791","url":"https://develop.peredeals.com/fund/9cgch#deals","referrer":"https://develop.peredeals.com/fund/9cgch#overview"},"action":{"id":["560d8260-7dd5-4732-9bf1-a7e277612aa6","a8c95812-2f9b-4582-94c7-7c2c10e2c906"]},"display":{"viewport":{"width":2378.75,"height":1073.75}},"connectivity":{"status":"connected","effective_type":"4g"},"resource":{"id":"db380331-8311-4910-99d7-a30edb27bffb","type":"fetch","duration":188700000,"method":"POST","status_code":201,"url":"https://develop.peredeals.com/api/proxy","render_blocking_status":"non-blocking","size":500,"encoded_body_size":500,"decoded_body_size":500,"transfer_size":800,"download":{"duration":400000,"start":188300000},"first_byte":{"duration":186600000,"start":1700000}},"type":"resource"}\n{"_dd":{"format_version":2,"drift":-1,"configuration":{"session_sample_rate":100,"session_replay_sample_rate":0},"discarded":false},"application":{"id":"e8f0eb7c-481d-4883-9780-316a96c84484"},"date":1723122620000,"service":"fusion-develop-rum","source":"browser","session":{"id":"551357c3-3104-4f81-964d-6d94bfdb7b9c","type":"user"},"view":{"id":"a25b892b-1678-4001-af75-c06182afd791","url":"https://develop.peredeals.com/fund/9cgch#deals","referrer":"https://develop.peredeals.com/fund/9cgch#overview"},"action":{"id":["560d8260-7dd5-4732-9bf1-a7e277612aa6","a8c95812-2f9b-4582-94c7-7c2c10e2c906"]},"display":{"viewport":{"width":2378.75,"height":1073.75}},"connectivity":{"status":"connected","effective_type":"4g"},"resource":{"id":"d794d4ad-6d1a-4005-9d76-aa91cb149c8e","type":"fetch","duration":172700000,"method":"GET","status_code":200,"url":"https://develop.peredeals.com/passwordless-access?_rsc=111jc","render_blocking_status":"non-blocking","size":156,"encoded_body_size":134,"decoded_body_size":156,"transfer_size":434,"download":{"duration":3300000,"start":169400000},"first_byte":{"duration":167800000,"start":1600000}},"type":"resource"}\n{"_dd":{"format_version":2,"drift":-1,"configuration":{"session_sample_rate":100,"session_replay_sample_rate":0},"discarded":false},"application":{"id":"e8f0eb7c-481d-4883-9780-316a96c84484"},"date":1723122620000,"service":"fusion-develop-rum","source":"browser","session":{"id":"551357c3-3104-4f81-964d-6d94bfdb7b9c","type":"user"},"view":{"id":"a25b892b-1678-4001-af75-c06182afd791","url":"https://develop.peredeals.com/fund/9cgch#deals","referrer":"https://develop.peredeals.com/fund/9cgch#overview"},"action":{"id":["560d8260-7dd5-4732-9bf1-a7e277612aa6","a8c95812-2f9b-4582-94c7-7c2c10e2c906"]},"display":{"viewport":{"width":2378.75,"height":1073.75}},"connectivity":{"status":"connected","effective_type":"4g"},"resource":{"id":"6a4ce18c-5314-4b47-86d9-ba038252d343","type":"fetch","duration":172400000,"method":"GET","status_code":200,"url":"https://develop.peredeals.com/privacy-notice?_rsc=111jc","render_blocking_status":"non-blocking","size":146,"encoded_body_size":129,"decoded_body_size":146,"transfer_size":429,"download":{"duration":3300000,"start":169100000},"first_byte":{"duration":167800000,"start":1300000}},"type":"resource"}\n{"_dd":{"format_version":2,"drift":0,"configuration":{"session_sample_rate":100,"session_replay_sample_rate":0},"discarded":false},"application":{"id":"e8f0eb7c-481d-4883-9780-316a96c84484"},"date":1723122620001,"service":"fusion-develop-rum","source":"browser","session":{"id":"551357c3-3104-4f81-964d-6d94bfdb7b9c","type":"user"},"view":{"id":"a25b892b-1678-4001-af75-c06182afd791","url":"https://develop.peredeals.com/fund/9cgch#deals","referrer":"https://develop.peredeals.com/fund/9cgch#overview"},"action":{"id":["560d8260-7dd5-4732-9bf1-a7e277612aa6","a8c95812-2f9b-4582-94c7-7c2c10e2c906"]},"display":{"viewport":{"width":2378.75,"height":1073.75}},"connectivity":{"status":"connected","effective_type":"4g"},"resource":{"id":"e0cceeaf-426f-4d99-98db-28848c8807c7","type":"fetch","duration":172400000,"method":"GET","status_code":200,"url":"https://develop.peredeals.com/cookie-policy?_rsc=111jc","render_blocking_status":"non-blocking","size":144,"encoded_body_size":128,"decoded_body_size":144,"transfer_size":428,"download":{"duration":3400000,"start":169000000},"first_byte":{"duration":167400000,"start":1600000}},"type":"resource"}\n{"_dd":{"format_version":2,"drift":0,"configuration":{"session_sample_rate":100,"session_replay_sample_rate":0},"discarded":false},"application":{"id":"e8f0eb7c-481d-4883-9780-316a96c84484"},"date":1723122620001,"service":"fusion-develop-rum","source":"browser","session":{"id":"551357c3-3104-4f81-964d-6d94bfdb7b9c","type":"user"},"view":{"id":"a25b892b-1678-4001-af75-c06182afd791","url":"https://develop.peredeals.com/fund/9cgch#deals","referrer":"https://develop.peredeals.com/fund/9cgch#overview"},"action":{"id":["560d8260-7dd5-4732-9bf1-a7e277612aa6","a8c95812-2f9b-4582-94c7-7c2c10e2c906"]},"display":{"viewport":{"width":2378.75,"height":1073.75}},"connectivity":{"status":"connected","effective_type":"4g"},"resource":{"id":"72cb0aff-7141-4ab4-a2cf-9318f282f6bc","type":"fetch","duration":172500000,"method":"GET","status_code":200,"url":"https://develop.peredeals.com/terms-conditions?_rsc=111jc","render_blocking_status":"non-blocking","size":150,"encoded_body_size":131,"decoded_body_size":150,"transfer_size":431,"download":{"duration":3600000,"start":168900000},"first_byte":{"duration":167400000,"start":1500000}},"type":"resource"}\n{"_dd":{"format_version":2,"drift":0,"configuration":{"session_sample_rate":100,"session_replay_sample_rate":0},"action":{"target":{"width":16,"height":16,"selector":"DIV[data-testid=\\"data-table-pagination\\"]>DIV.flex>DIV.flex>BUTTON:nth-of-type(4)>svg"},"position":{"x":3,"y":4}}},"application":{"id":"e8f0eb7c-481d-4883-9780-316a96c84484"},"date":1723122619791,"service":"fusion-develop-rum","source":"browser","session":{"id":"551357c3-3104-4f81-964d-6d94bfdb7b9c","type":"user"},"view":{"id":"a25b892b-1678-4001-af75-c06182afd791","url":"https://develop.peredeals.com/fund/9cgch#deals","referrer":"https://develop.peredeals.com/fund/9cgch#overview","in_foreground":true},"action":{"id":"a8c95812-2f9b-4582-94c7-7c2c10e2c906","target":{"name":"Go to next page"},"type":"click","loading_time":384000000,"frustration":{"type":[]},"error":{"count":0},"long_task":{"count":0},"resource":{"count":5}},"display":{"viewport":{"width":2378.75,"height":1073.75}},"connectivity":{"status":"connected","effective_type":"4g"},"type":"action"}\n{"_dd":{"format_version":2,"drift":0,"configuration":{"session_sample_rate":100,"session_replay_sample_rate":0,"start_session_replay_recording_manually":false},"document_version":3,"page_states":[{"state":"active","start":1275900000}]},"application":{"id":"e8f0eb7c-481d-4883-9780-316a96c84484"},"date":1723122610851,"service":"fusion-develop-rum","source":"browser","session":{"id":"551357c3-3104-4f81-964d-6d94bfdb7b9c","type":"user","sampled_for_replay":false},"view":{"id":"19e52fd3-214b-401a-85f9-b155ace7b3ec","url":"https://develop.peredeals.com/fund/9cgch#overview","referrer":"","action":{"count":1},"frustration":{"count":0},"cumulative_layout_shift":0.0174,"cumulative_layout_shift_time":1669000000,"cumulative_layout_shift_target_selector":"#deals-section>DIV.w-full>DIV.rounded-md>DIV.relative>TABLE.w-full>THEAD.\\\\[\\\\&_tr\\\\]\\\\:border-b>TR.data-\\\\[state\\\\=selected\\\\]\\\\:bg-muted>TH:nth-of-type(2)","first_byte":266800000,"dom_complete":1403200000,"dom_content_loaded":472200000,"dom_interactive":472200000,"error":{"count":0},"first_contentful_paint":494800000,"first_input_delay":700000,"first_input_time":3476500000,"first_input_target_selector":"DIV[data-testid=\\"vertical-Deals\\"]>SPAN.cursor-pointer","interaction_to_next_paint":0,"interaction_to_next_paint_time":3476500000,"interaction_to_next_paint_target_selector":"DIV[data-testid=\\"vertical-Deals\\"]>SPAN.cursor-pointer","is_active":false,"largest_contentful_paint":1694600000,"largest_contentful_paint_target_selector":"#deals-section>DIV.w-full>DIV.rounded-md>DIV.relative>TABLE.w-full>TBODY.relative>TR:nth-of-type(3)>TD:nth-of-type(1)>DIV.text-left","load_event":1403300000,"loading_time":1707000000,"loading_type":"initial_load","long_task":{"count":0},"resource":{"count":49},"time_spent":3641000000},"display":{"viewport":{"width":2378.75,"height":1073.75},"scroll":{"max_depth":1472,"max_depth_scroll_top":398,"max_scroll_height":2550,"max_scroll_height_time":2290000000}},"connectivity":{"status":"connected","effective_type":"4g"},"type":"view","privacy":{"replay_level":"mask-user-input"}}\n{"_dd":{"format_version":2,"drift":-1,"configuration":{"session_sample_rate":100,"session_replay_sample_rate":0,"start_session_replay_recording_manually":false},"document_version":4,"page_states":[{"state":"active","start":-2366600000}]},"application":{"id":"e8f0eb7c-481d-4883-9780-316a96c84484"},"date":1723122614493,"service":"fusion-develop-rum","source":"browser","session":{"id":"551357c3-3104-4f81-964d-6d94bfdb7b9c","type":"user","sampled_for_replay":false},"view":{"id":"a25b892b-1678-4001-af75-c06182afd791","url":"https://develop.peredeals.com/fund/9cgch#deals","referrer":"https://develop.peredeals.com/fund/9cgch#overview","action":{"count":2},"frustration":{"count":1},"cumulative_layout_shift":0,"error":{"count":0},"interaction_to_next_paint":0,"is_active":false,"loading_time":1000000,"loading_type":"route_change","long_task":{"count":0},"resource":{"count":5},"time_spent":7127000000},"display":{"viewport":{"width":2378.75,"height":1073.75},"scroll":{"max_depth":1987,"max_depth_scroll_top":913,"max_scroll_height":2550,"max_scroll_height_time":1005800000}},"connectivity":{"status":"connected","effective_type":"4g"},"type":"view","privacy":{"replay_level":"mask-user-input"}}',
      {
        headers: {
          'content-type': 'text/plain;charset=UTF-8',
          referer: 'https://develop.peredeals.com/',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
  })

  group('page_4 - https://develop.peredeals.com/fund/9cgch#overview', function () {
    response = http.post(
      'https://develop.peredeals.com/api/proxy',
      '{"url":"/api/fund/9cgch/deals","method":"POST","body":"{\\"sort\\":{\\"sortBy\\":\\"date\\",\\"sortOrder\\":\\"desc\\"},\\"pagination\\":{\\"page\\":1,\\"size\\":10},\\"filters\\":{}}"}',
      {
        headers: {
          'content-type': 'application/json',
          referer: 'https://develop.peredeals.com/fund/9cgch',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
  })

  // Automatically added sleep
  sleep(1)
}
