# noughts-and-crosses-api

An API wrapper around the [noughts-and-crosses](https://github.com/mattsmithcode/noughts-and-crosses) project, using the Serverless Framework to deploy to AWS with Lambdas and API Gateway.

## Deploying

Generate [AWS credentials](https://docs.aws.amazon.com/singlesignon/latest/userguide/howtogetcredentials.html) for CLI access.

Set the `AWS_OWNER` environment variable:

```console
export AWS_OWNER=<YOUR_VALUE>
```

Install package dependencies using `npm`:

```console
npm install
```

Deploy the API using `serverless`:

```console
npx serverless deploy
```

## API Reference

### validate

#### URL

`POST` /validate

#### Request example

```json
[
  ["X",  null, null],
  ["X",  "O",  null],
  [null, null, null]
]
```

#### Response example

**Status**: 200

**Body**:

```json
true
```

### next-move

#### URL

`POST` /next-move

#### Request example

```json
[
  ["X",  null, "X"],
  [null, "O",  null],
  [null, null, null]
]
```

#### Response example

**Status**: 200

**Body**:

```json
[
  ["X",  "O",  "X"],
  [null, "O",  null],
  [null, null, null]
]
```

### check-winner

#### URL

`POST` /check-winner

#### Request example

```json
[
  ["O",  null, "O"],
  ["X",  "X",  "X"],
  [null, null, null]
]
```

#### Response example

**Status**: 200

**Body**:

```json
"X"
```

## Licence

[ISC](https://github.com/mattsmithcode/noughts-and-crosses-api/blob/main/LICENCE)
