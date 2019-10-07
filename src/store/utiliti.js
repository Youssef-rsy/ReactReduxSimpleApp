//Another way of optimizing our code with the use of the utility functions
export const updateObject = (oldObject , updatedObject ) => {
    return {
        ...oldObject,
        ...updatedObject
    }
};