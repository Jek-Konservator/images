export const errorHandler = (error: any) => {
  const errorMessage = (() => {
    switch (error.response.data) {
      case "Rate Limit Exceeded": {
        return "Превышен лимит запросов к API, повторите попытку позже";
      }
      default: {
        return "Произошла ошибка, повторите попытку позже";
      }
    }
  })();
  alert(errorMessage);
};
