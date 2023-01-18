let loaderRef;
export const setLoaderRef = (ref) => {
    loaderRef = ref;
  };
  export const toggleLoader = (showLoader) => {
    if (loaderRef) {
      loaderRef.toggleLoader(showLoader);
    }
  };