window.BENCHMARK_DATA = {
  "lastUpdate": 1665300166611,
  "repoUrl": "https://github.com/Sin7Y/halo2",
  "entries": {
    "halo2 Benchmark": [
      {
        "commit": {
          "author": {
            "email": "daira@jacaranda.org",
            "name": "Daira Hopwood",
            "username": "daira"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ccfe3e8ccd63ce522863c83dc71f42e497db921a",
          "message": "Merge pull request #671 from zcash/refactor-lookup\n\n`lookup::prover`: Compress expressions and cosets in `commit_permuted`",
          "timestamp": "2022-10-08T13:29:44+01:00",
          "tree_id": "f1c04996ef1320bb4e7ba187c76355e7d2c40702",
          "url": "https://github.com/Sin7Y/halo2/commit/ccfe3e8ccd63ce522863c83dc71f42e497db921a"
        },
        "date": 1665300163638,
        "tool": "cargo",
        "benches": [
          {
            "name": "WIDTH = 3, RATE = 2-prover",
            "value": 66743188,
            "range": "± 1831611",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 3, RATE = 2-verifier",
            "value": 3441894,
            "range": "± 67646",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 9, RATE = 8-prover",
            "value": 141792770,
            "range": "± 2844078",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 9, RATE = 8-verifier",
            "value": 4201278,
            "range": "± 296815",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 12, RATE = 11-prover",
            "value": 200980950,
            "range": "± 1550301",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 12, RATE = 11-verifier",
            "value": 4577194,
            "range": "± 92449",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon/2-to-1",
            "value": 48252,
            "range": "± 198",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/510",
            "value": 164123,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/510",
            "value": 179410,
            "range": "± 208",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/510",
            "value": 293151,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/510",
            "value": 293476,
            "range": "± 268",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/520",
            "value": 167569,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/520",
            "value": 182919,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/520",
            "value": 296966,
            "range": "± 229",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/520",
            "value": 297098,
            "range": "± 292",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/1086",
            "value": 350576,
            "range": "± 225",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/1086",
            "value": 366440,
            "range": "± 469",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/1086",
            "value": 479914,
            "range": "± 187",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/1086",
            "value": 479875,
            "range": "± 347",
            "unit": "ns/iter"
          },
          {
            "name": "double-and-add",
            "value": 3695457,
            "range": "± 7234",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/14",
            "value": 6062178,
            "range": "± 2468",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/15",
            "value": 10562970,
            "range": "± 7208",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/16",
            "value": 22320073,
            "range": "± 44619",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/17",
            "value": 40768299,
            "range": "± 245186",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/18",
            "value": 81475805,
            "range": "± 559753",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/3",
            "value": 7174,
            "range": "± 424",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/4",
            "value": 9034,
            "range": "± 627",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/5",
            "value": 15791,
            "range": "± 169",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/6",
            "value": 19857,
            "range": "± 463",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/7",
            "value": 29724,
            "range": "± 162",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/8",
            "value": 49830,
            "range": "± 2086",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/9",
            "value": 102585,
            "range": "± 5203",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/10",
            "value": 198631,
            "range": "± 10002",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/11",
            "value": 406156,
            "range": "± 9316",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/12",
            "value": 852536,
            "range": "± 40501",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/13",
            "value": 1797678,
            "range": "± 17502",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/14",
            "value": 3804485,
            "range": "± 42364",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/15",
            "value": 8103439,
            "range": "± 187932",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/16",
            "value": 17430818,
            "range": "± 118993",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/17",
            "value": 37797877,
            "range": "± 1034537",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/18",
            "value": 80647486,
            "range": "± 457105",
            "unit": "ns/iter"
          },
          {
            "name": "hash-to-curve/Pallas",
            "value": 34790,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "hash-to-curve/Vesta",
            "value": 34945,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/8",
            "value": 176480315,
            "range": "± 399999",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/9",
            "value": 379969636,
            "range": "± 753834",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/10",
            "value": 819710416,
            "range": "± 4632611",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/11",
            "value": 1764810800,
            "range": "± 2427126",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/12",
            "value": 3778427256,
            "range": "± 5310262",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/13",
            "value": 8071239842,
            "range": "± 13378501",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/14",
            "value": 17195262639,
            "range": "± 19514798",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/15",
            "value": 36504763262,
            "range": "± 34810862",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/16",
            "value": 77252729882,
            "range": "± 48079952",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/8",
            "value": 109926263,
            "range": "± 424656",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/9",
            "value": 189094489,
            "range": "± 660300",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/10",
            "value": 335034715,
            "range": "± 3356587",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/11",
            "value": 607908285,
            "range": "± 2226603",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/12",
            "value": 1122820274,
            "range": "± 2356438",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/13",
            "value": 2136038162,
            "range": "± 59442195",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/14",
            "value": 4064223237,
            "range": "± 14355822",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/15",
            "value": 7823311162,
            "range": "± 26193549",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/16",
            "value": 15045960252,
            "range": "± 36480143",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/8",
            "value": 5913308,
            "range": "± 93397",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/9",
            "value": 9151552,
            "range": "± 194375",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/10",
            "value": 14810638,
            "range": "± 575199",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/11",
            "value": 24851266,
            "range": "± 619299",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/12",
            "value": 42428951,
            "range": "± 842101",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/13",
            "value": 75535903,
            "range": "± 2944601",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/14",
            "value": 135407253,
            "range": "± 551872",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/15",
            "value": 251554184,
            "range": "± 10083704",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/16",
            "value": 456032253,
            "range": "± 3561785",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}