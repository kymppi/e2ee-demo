# E2EE Demo

This is a demo to demonstrate how to implement E2EE.

## Languages

- [ ] Typescript
- [ ] Rust
- [ ] C
- [ ] More????

## Usage/Examples

See in the language's README.md for usage.

## FAQ

#### Is the correct way to implement it

No, definitely no, i'm not a professional, but a student. If there are any errors, feel free to fix them and follow [contributing guidelines](#contributing).

#### Can i implement this with other languages than the ones in the project

Absolutely yes, feel free to add your demo with the language you want. Make sure the language isn't in the repository yet and follow the [contribution guidelines](#contributing)

## Contributing

Contributions are always welcome!

See `CONTRIBUTING.md` for ways to get started.

Make the api follow [API Reference](#api-reference) so we can use the same frontend.

Please adhere to this project's `code of conduct`.

## API Reference

#### Send Message

```http
  POST /api/messages
```

| Parameter      | Type     | Description                |
| :------------- | :------- | :------------------------- |
| `access_token` | `string` | **Required**. Access Token |
| `to`           | `string` | **Required**. The Receiver |

## Feedback

If you have any feedback, please reach out to us at support@midka.dev or open a discussion.

## Authors

- [@midka](https://github.com/kymppi) - Typescript

## License

[MIT](https://choosealicense.com/licenses/mit/)
