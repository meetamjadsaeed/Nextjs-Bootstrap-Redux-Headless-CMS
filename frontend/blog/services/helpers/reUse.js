
import axios from "axios";
import NoRecord from "./NoRecord";
import LoaderForApi from "./LoaderForApi";
import LoaderForContent from "./LoaderForContent";

const CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

class ReUse {
  static emailRegExp =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  static phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  static defaultAvatar = (username = "John Doe") => {
    return `https://ui-avatars.com/api/?name=${username}&background=random&size=512`;
  };

  static defaultThumbnailImage = (content = "No+Image+Available") => {
    return `https://placehold.co/400x400?text=${content}`;
  };

  static resetForm = (fields = {}) => {
    /**
     *  // fields is object
     *
     * Like fields = {
     * name: string
     * .....
     * }
     */

    const reset = Object.entries(fields).forEach(([key, value]) => {
      fields[key] = "";
    });
    return reset;
  };

  static resetErrors = (fields = {}) => {
    /**
     *  // fields is object
     *
     * Like fields = {
     * name: string
     * .....
     * }
     */
    const reset = Object.entries(fields).forEach(([key, value]) => {
      fields[key] = "";
    });
    return reset;
  };

  static mapItems = (loading, data = [], Component, ...attributes) => {
    try {
      if (loading) {
        return <LoaderForApi />;
      }

      if (Array.isArray(data) && data.length > 0) {
        return data.map((item, i) => (
          <Component key={i} {...item} {...attributes} />
        ));
      }

      return <NoRecord />;
    } catch (error) {
      // console.error("An error occurred:", error);
      // You can choose to render an error component or a fallback UI here
      return <NoRecord />;
    }
  };

  static loadObjBasedApiData = (loading, data = "") => {
    if (loading) {
      return <LoaderForContent />;
    }
    return data || null;
  };

  static onImageError = (e) => {
    const content = "No+Image+Available";
    e.target.src = `https://placehold.co/200x200?text=${content}`;
  };

  static removeHTMLTags = (unStripped = "") => {
    let stripped = unStripped.replaceAll(/<\/?[^>]+(>|$)/gi, "");
    return stripped;
  };

  static validateRequired = (fields) => {
    /**
     *
     * fields is object
     * example
     * 		const fields = {
     * 				email: "",
     * 				password: "",
     * 				// Add more fields as needed
     * 				};
     */

    const errors = {};

    for (const field in fields) {
      if (!fields[field]) {
        errors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)
          } is required`;
      } else if (field?.toLowerCase() === "email") {
        const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegExp.test(fields[field])) {
          errors[field] = "Please enter a valid email";
        }
      } else if (field?.toLowerCase() === "password") {
        if (fields[field].length < 6) {
          errors[field] = "Password must be at least 6 characters long";
        }
      }
    }

    return errors;
  };

  static scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };


  static handleFileUploads = (e) => {
    return new Promise((resolve, reject) => {
      try {
        const reader = new FileReader();
        const file = e.target.files[0];

        if (!file) {
          reject(new Error("No file selected."));
          return;
        }

        reader.onload = () => {
          const fileOutput = file;
          const fileUpload = reader.result;
          resolve({ fileOutput, fileUpload });
        };

        reader.onerror = (error) => {
          reject(error);
        };

        reader.readAsDataURL(file);
      } catch (error) {
        reject(error);
      }
    });
  };



  static dateFormat = (date = "") => {
    try {
      if (!date) {
        return "Invalid Date";
      }

      const formatedDate = new Date(date).toLocaleDateString(undefined, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });

      return formatedDate;
    } catch (error) {
      console.error("Error formatting date:", error);
      return "Invalid Date";
    }
  };



  static logOutUser = () => {
    try {
      localStorage.clear();
      window.location.reload();
    } catch (error) {
      console.error("Error logging out user:", error);
      // Handle the error in an appropriate way, such as showing an error message to the user.
    }
  };

  static getApiData = async (
    apiFunction,
    setApiData,
    setLoading,
    ...params
  ) => {
    setLoading(true);
    try {
      let apiResp = await apiFunction;
      const { message, response } = apiResp?.data;
      const result = response?.data;
      setApiData(result);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  static sortData = (data = [], order, sortByProperty) => {
    /**
     * data should be array of objects
     * order =1 ( for ascending)
     * order =2 ( for descending)
     * sortByProperty = property ( add property on the basis you want to sort data)
     *
     */

    if (!Array.isArray(data)) {
      throw new Error("Invalid data format. Please provide an array.");
    }

    if (![1, 2].includes(order)) {
      throw new Error("Invalid order value. Please use 1 or 2.");
    }

    if (!sortByProperty || typeof sortByProperty !== "string") {
      throw new Error(
        "Invalid sortByProperty. Please provide a valid property name."
      );
    }

    const compareFunction = (a, b) => {
      const valA = a[sortByProperty];
      const valB = b[sortByProperty];

      if (valA === valB) {
        return 0;
      }

      if (order === 1) {
        return valA < valB ? -1 : 1;
      } else {
        return valA > valB ? -1 : 1;
      }
    };

    return [...data].sort(compareFunction);
  };

  static sliceText = (content = "", noOfWords = 3) => {
    const words = content && content.trim().split(/\s+/);
    return words.slice(0, noOfWords).join(" ");
  };

  static dangerouslySetInnerHTML = (content = "") => {
    if (!content || typeof content !== "string") {
      return null; // Return null if content is missing or not a string
    }

    return (
      <p
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      ></p>
    );
  };

  static convertDollarToCents = (dollars = 0) => {
    var cents = dollars * 100;
    return cents;
  };


  static getInputFieldsData = (e, setFieldsData, fieldsData) => {
    try {
      const { value, name } = e.target;

      if (!name || typeof value === "undefined") {
        throw new Error("Invalid input data.");
      }

      const updatedFieldsData = {
        ...fieldsData,
        [name]: value,
      };

      setFieldsData(updatedFieldsData);
    } catch (error) {
      console.error("Error updating fields data:", error);
      // Handle the error in an appropriate way, such as showing an error message to the user.
    }
  };

  static stripePaymentHandler = async (
    fieldsData = {},
    stripePublishableKey = ""
  ) => {
    const { cardNumber, expiryDate, cvcNumber } = fieldsData;

    // Basic validation
    if (!cardNumber || !expiryDate || !cvcNumber) {
      throw new Error("Missing card details.");
    }

    const cardToken = {
      card: {
        number: cardNumber,
        exp_month: expiryDate.split("/")[0],
        exp_year: expiryDate.split("/")[1],
        cvc: cvcNumber,
      },
    };

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_STRIPE_BASE_URL}/tokens`,
        cardToken,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Bearer ${stripePublishableKey}`,
          },
        }
      );

      return { isPaymentSuccess: true, data: response.data };
    } catch (err) {
      console.error("Stripe Payment Error:", err.message);
      throw err; // Re-throw the error for the caller to handle
    }
  };

  static isValidCardNumber = (cardNumber) => {
    // Remove any non-numeric characters from the card number
    const cleanedCardNumber = cardNumber.replace(/\D/g, "");

    if (!cleanedCardNumber || cleanedCardNumber.length !== 16) {
      return false; // Card number must be exactly 16 digits long
    }

    // Convert the card number to an array of digits
    const digits = cleanedCardNumber.split("").map(Number);

    // Double every other digit starting from the second-to-last digit
    for (let i = digits.length - 2; i >= 0; i -= 2) {
      digits[i] *= 2;
      if (digits[i] > 9) {
        digits[i] -= 9; // If the result is greater than 9, subtract 9
      }
    }

    // Sum all the digits
    const sum = digits.reduce((acc, curr) => acc + curr, 0);

    // If the sum is divisible by 10, the card number is valid
    return sum % 10 === 0;
  };

  static isValidExpiryDate = (expiryDate) => {
    const currentDate = new Date();
    const [expMonth, expYear] = expiryDate.split("/");
    const expirationDate = new Date(
      Number(`20${expYear}`),
      Number(expMonth) - 1
    );

    if (
      isNaN(expMonth) ||
      isNaN(expYear) ||
      expMonth.length !== 2 ||
      expYear.length !== 2
    ) {
      return false; // Invalid format
    }

    // Check if the expiration date is not in the past
    return expirationDate >= currentDate;
  };

  static isValidCVCNumber = (cvcNumber) => {
    const cleanedCvcNumber = cvcNumber.replace(/\D/g, ""); // Remove any non-numeric characters

    return cleanedCvcNumber.length === 3; // CVC number must be exactly 3 digits long
  };

  static extractIdFromCurrentUrl() {
    try {
      let currentUrl = window.location.href || "";
      const urlParts = currentUrl.split("/");
      const id = urlParts[urlParts.length - 1];

      if (!id) {
        throw new Error("Unable to extract ID from URL.");
      }

      return id;
    } catch (error) {
      console.error("Error extracting ID from URL:", error.message);
      return null;
    }
  }

  static isValueEmpty(object = {}) {
    let isValueEmpty = false;

    Object.entries(object).forEach(([key, value]) =>
      object[key] === "" ? (isValueEmpty = false) : (isValueEmpty = true)
    );

    return isValueEmpty;
  }
}

export default ReUse;
