## Benchmark Testing Documentation

### Testing Parameters
All benchmarks use the following parameters with `bombardier`:

- Test 1: `bombardier -c 125 -n 100000 http://localhost:3000`
- Test 2: `bombardier -c 125 -n 1000000 http://localhost:3000/api`

The first test is for testing Nuxt speed, and the second test is for testing Nitro's API speed.

note: each test was performed twice, once for warmup and once for actual benchmarking

Used on a m1 mac air with 16gb ram

### Test Results

#### bun run bun (test 1)

```
  100000 / 100000 [===============================================================================] 100.00% 2497/s 40s
Done!
Statistics        Avg      Stdev        Max
  Reqs/sec      2510.81    1876.42    6580.92
  Latency       49.80ms     4.57ms   156.62ms
  HTTP codes:
    1xx - 0, 2xx - 100000, 3xx - 0, 4xx - 0, 5xx - 0
    others - 0
  Throughput:   258.23MB/s
```
#### bun run bun (test 2)

```
 1000000 / 1000000 [============================================================================] 100.00% 26710/s 37s
Done!
Statistics        Avg      Stdev        Max
  Reqs/sec     26806.90    3545.88   35522.16
  Latency        4.66ms   748.82us    53.12ms
  HTTP codes:
    1xx - 0, 2xx - 1000000, 3xx - 0, 4xx - 0, 5xx - 0
    others - 0
  Throughput:     4.52MB/s
```
#### bun run elsyia (test 1)

```
 100000 / 100000 [===============================================================================] 100.00% 2333/s 42s
Done!
Statistics        Avg      Stdev        Max
  Reqs/sec      2338.41    1858.63    8863.13
  Latency       53.51ms     7.81ms   222.31ms
  HTTP codes:
    1xx - 0, 2xx - 100000, 3xx - 0, 4xx - 0, 5xx - 0
    others - 0
  Throughput:   240.34MB/s
```
#### bun run elsyia (test 2)

```
 1000000 / 1000000 [============================================================================] 100.00% 26285/s 38s
Done!
Statistics        Avg      Stdev        Max
  Reqs/sec     26348.37    3781.86   31108.14
  Latency        4.74ms     1.12ms    74.32ms
  HTTP codes:
    1xx - 0, 2xx - 1000000, 3xx - 0, 4xx - 0, 5xx - 0
    others - 0
  Throughput:     4.45MB/s
```
#### bun run standard-node  *this is nuxt default (test 1)

```
 100000 / 100000 [===============================================================================] 100.00% 1829/s 54s
Done!
Statistics        Avg      Stdev        Max
  Reqs/sec      1834.92    1723.59    7057.20
  Latency       68.20ms   181.76ms     10.02s
  HTTP codes:
    1xx - 0, 2xx - 99983, 3xx - 0, 4xx - 0, 5xx - 0
    others - 17
  Errors:
       timeout - 17
  Throughput:   188.67MB/s
```
#### bun run standard-node  *this is nuxt default (test 2)

```
 1000000 / 1000000 [============================================================================] 100.00% 25734/s 38s
Done!
Statistics        Avg      Stdev        Max
  Reqs/sec     25811.71    4414.68   35072.40
  Latency        4.84ms     1.75ms   300.90ms
  HTTP codes:
    1xx - 0, 2xx - 1000000, 3xx - 0, 4xx - 0, 5xx - 0
    others - 0
  Throughput:     5.52MB/s
```
#### bun run standard-bun (test 1)

```
 100000 / 100000 [===============================================================================] 100.00% 2020/s 49s
Done!
Statistics        Avg      Stdev        Max
  Reqs/sec      2029.43    1784.34    8855.79
  Latency       61.80ms    21.75ms   461.66ms
  HTTP codes:
    1xx - 0, 2xx - 100000, 3xx - 0, 4xx - 0, 5xx - 0
    others - 0
  Throughput:   208.10MB/s
```
#### bun run standard-bun (test 2)

```
1000000 / 1000000 [============================================================================] 100.00% 17144/s 58s
Done!
Statistics        Avg      Stdev        Max
  Reqs/sec     17194.56    4282.63   25047.42
  Latency        7.28ms     2.87ms   162.93ms
  HTTP codes:
    1xx - 0, 2xx - 1000000, 3xx - 0, 4xx - 0, 5xx - 0
    others - 0
  Throughput:     2.90MB/s
```
#### bun run deno (test 1)

```
 100000 / 100000 [=============================================================================] 100.00% 1349/s 1m14s
Done!
Statistics        Avg      Stdev        Max
  Reqs/sec      1353.48     446.86    2930.80
  Latency       92.53ms    29.54ms   399.35ms
  HTTP codes:
    1xx - 0, 2xx - 100000, 3xx - 0, 4xx - 0, 5xx - 0
    others - 0
  Throughput:   139.00MB/s
```
#### bun run deno (test 2)

```
 1000000 / 1000000 [============================================================================] 100.00% 22594/s 44s
Done!
Statistics        Avg      Stdev        Max
  Reqs/sec     22695.87    4567.62   34033.10
  Latency        5.51ms     1.91ms    82.46ms
  HTTP codes:
    1xx - 0, 2xx - 1000000, 3xx - 0, 4xx - 0, 5xx - 0
    others - 0
  Throughput:     4.33MB/s
```

| Test Name                        | Test Type | Requests | Duration | Reqs/sec  | Latency Avg | Latency Stdev | Latency Max | HTTP Codes (2xx) | Throughput   | Max Reqs/sec | Max Latency  |
|----------------------------------|-----------|----------|----------|-----------|-------------|---------------|-------------|------------------|--------------|--------------|--------------|
| bun_run_bun (Nuxt - Test 1)      | Nuxt      | 100,000  | 40s      | 2,510.81  | 49.80ms     | 4.57ms        | 156.62ms    | 100,000          | 258.23MB/s   | 6,580.92     | 156.62ms     |
| bun_run_bun (API - Test 2)       | API       | 1,000,000| 37s      | 26,806.90 | 4.66ms      | 748.82us      | 53.12ms     | 1,000,000        | 4.52MB/s     | 35,522.16    | 53.12ms      |
| bun_run_elsyia (Nuxt - Test 1)   | Nuxt      | 100,000  | 42s      | 2,338.41  | 53.51ms     | 7.81ms        | 222.31ms    | 100,000          | 240.34MB/s   | 8,863.13     | 222.31ms     |
| bun_run_elsyia (API - Test 2)    | API       | 1,000,000| 38s      | 26,348.37 | 4.74ms      | 1.12ms        | 74.32ms     | 1,000,000        | 4.45MB/s     | 31,108.14    | 74.32ms      |
| bun_run_standard_node (Nuxt - Test 1)| Nuxt | 100,000  | 54s      | 1,834.92  | 68.20ms     | 181.76ms      | 10.02s      | 99,983           | 188.67MB/s   | 7,057.20     | 10.02s       |
| bun_run_standard_node (API - Test 2) | API | 1,000,000| 38s      | 25,811.71 | 4.84ms      | 1.75ms        | 300.90ms    | 1,000,000        | 5.52MB/s     | 35,072.40    | 300.90ms     |
| bun_run_standard_bun (Nuxt - Test 1) | Nuxt | 100,000  | 49s      | 2,029.43  | 61.80ms     | 21.75ms       | 461.66ms    | 100,000          | 208.10MB/s   | 8,855.79     | 461.66ms     |
| bun_run_standard_bun (API - Test 2)  | API | 1,000,000| 58s      | 17,194.56 | 7.28ms      | 2.87ms        | 162.93ms    | 1,000,000        | 2.90MB/s     | 25,047.42    | 162.93ms     |
| bun_run_deno (Nuxt - Test 1)         | Nuxt | 100,000  | 1m14s    | 1,353.48  | 92.53ms     | 29.54ms       | 399.35ms    | 100,000          | 139.00MB/s   | 2,930.80     | 399.35ms     |
| bun_run_deno (API - Test 2)          | API | 1,000,000| 44s      | 22,695.87 | 5.51ms      | 1.91ms        | 82.46ms     | 1,000,000        | 4.33MB/s     | 34,033.10    | 82.46ms      |
