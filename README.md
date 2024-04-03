# dotnet-minimal-api

A minimal ASP.NET Core API based on [Create a minimal API with ASP.NET Core](https://learn.microsoft.com/en-us/aspnet/core/tutorials/min-web-api?view=aspnetcore-8.0&tabs=visual-studio-code)

And a [Vue.js](https://vuejs.org/) v3 client consuming the API.

## Prerequisites

- [Visual Studio Code](https://code.visualstudio.com/download)
- [C# for Visual Studio Code (latest version)](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp)
- [.NET 8.0 SDK](https://dotnet.microsoft.com/download/dotnet/8.0)
- [Node.js 20](https://nodejs.org/en/download)

## Development

### Backend

1. Run `Program.cs` by clicking the play button in VS Code
2. Hit http://localhost:5255/ in your browser

### Frontend

1. Run the vite dev server

```bash
$ cd vue-client
$ npm i
$ npm run dev
```

2. Hit http://localhost:5173/todos in your browser
