window.BENCHMARK_DATA = {
  "lastUpdate": 1660279761300,
  "repoUrl": "https://github.com/Sin7Y/halo2",
  "entries": {
    "halo2 Benchmark": [
      {
        "commit": {
          "author": {
            "email": "tinghan0110@gmail.com",
            "name": "han0110",
            "username": "han0110"
          },
          "committer": {
            "email": "yingtong@z.cash",
            "name": "ying tong",
            "username": "therealyingtong"
          },
          "distinct": true,
          "id": "8ff5b1e3af95ce8e9dcf1e74173d3d62ad1770b0",
          "message": "feat: make `Expression::{Fixed,Advice,Instance}` to wrap their own `Query` struct",
          "timestamp": "2022-07-15T10:33:47-04:00",
          "tree_id": "4e392a8c081fd14d6c62fad128b58f041be30bd1",
          "url": "https://github.com/Sin7Y/halo2/commit/8ff5b1e3af95ce8e9dcf1e74173d3d62ad1770b0"
        },
        "date": 1660279758330,
        "tool": "cargo",
        "benches": [
          {
            "name": "WIDTH = 3, RATE = 2-prover",
            "value": 61026898,
            "range": "± 5085653",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 3, RATE = 2-verifier",
            "value": 2975367,
            "range": "± 31974",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 9, RATE = 8-prover",
            "value": 133524345,
            "range": "± 2538054",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 9, RATE = 8-verifier",
            "value": 3664356,
            "range": "± 47609",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 12, RATE = 11-prover",
            "value": 185620307,
            "range": "± 1325001",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 12, RATE = 11-verifier",
            "value": 4009929,
            "range": "± 74245",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon/2-to-1",
            "value": 38813,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/510",
            "value": 141772,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/510",
            "value": 154035,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/510",
            "value": 249325,
            "range": "± 179",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/510",
            "value": 249323,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/520",
            "value": 144646,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/520",
            "value": 157049,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/520",
            "value": 252215,
            "range": "± 1534",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/520",
            "value": 252213,
            "range": "± 188",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/1086",
            "value": 302732,
            "range": "± 135",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/1086",
            "value": 315248,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/1086",
            "value": 410154,
            "range": "± 420",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/1086",
            "value": 410131,
            "range": "± 283",
            "unit": "ns/iter"
          },
          {
            "name": "double-and-add",
            "value": 3021686,
            "range": "± 2904",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/14",
            "value": 5888130,
            "range": "± 8575",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/15",
            "value": 10261056,
            "range": "± 26253",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/16",
            "value": 23018218,
            "range": "± 129292",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/17",
            "value": 42911263,
            "range": "± 244371",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/18",
            "value": 83438153,
            "range": "± 171060",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/3",
            "value": 8021,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/4",
            "value": 9029,
            "range": "± 190",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/5",
            "value": 16149,
            "range": "± 420",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/6",
            "value": 19321,
            "range": "± 433",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/7",
            "value": 27696,
            "range": "± 177",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/8",
            "value": 47432,
            "range": "± 855",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/9",
            "value": 97922,
            "range": "± 7470",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/10",
            "value": 189561,
            "range": "± 11301",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/11",
            "value": 390893,
            "range": "± 11377",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/12",
            "value": 819358,
            "range": "± 21667",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/13",
            "value": 1727588,
            "range": "± 48282",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/14",
            "value": 3692188,
            "range": "± 33494",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/15",
            "value": 8138636,
            "range": "± 245743",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/16",
            "value": 17736500,
            "range": "± 313028",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/17",
            "value": 38661945,
            "range": "± 256270",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/18",
            "value": 89941546,
            "range": "± 6523275",
            "unit": "ns/iter"
          },
          {
            "name": "hash-to-curve/Pallas",
            "value": 28444,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "hash-to-curve/Vesta",
            "value": 28487,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/8",
            "value": 153244993,
            "range": "± 4179872",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/9",
            "value": 328275392,
            "range": "± 809598",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/10",
            "value": 706973396,
            "range": "± 1666032",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/11",
            "value": 1518070643,
            "range": "± 1537988",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/12",
            "value": 3258746327,
            "range": "± 14222338",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/13",
            "value": 6960245264,
            "range": "± 5885577",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/14",
            "value": 14835991226,
            "range": "± 22553475",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/15",
            "value": 31486453552,
            "range": "± 50074684",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/16",
            "value": 66600220454,
            "range": "± 35309870",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/8",
            "value": 96185011,
            "range": "± 1296846",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/9",
            "value": 166647897,
            "range": "± 989685",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/10",
            "value": 294883769,
            "range": "± 1452555",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/11",
            "value": 537791568,
            "range": "± 2026571",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/12",
            "value": 1005798666,
            "range": "± 5789710",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/13",
            "value": 1899489408,
            "range": "± 7193019",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/14",
            "value": 3605056531,
            "range": "± 14978856",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/15",
            "value": 6971866817,
            "range": "± 75314819",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/16",
            "value": 13430367151,
            "range": "± 31298631",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/8",
            "value": 5164712,
            "range": "± 31206",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/9",
            "value": 8003340,
            "range": "± 115735",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/10",
            "value": 12808522,
            "range": "± 372566",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/11",
            "value": 21755134,
            "range": "± 762189",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/12",
            "value": 37514716,
            "range": "± 1121608",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/13",
            "value": 66284525,
            "range": "± 470625",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/14",
            "value": 120112690,
            "range": "± 3032548",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/15",
            "value": 222350982,
            "range": "± 5210094",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/16",
            "value": 401712389,
            "range": "± 9063837",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}