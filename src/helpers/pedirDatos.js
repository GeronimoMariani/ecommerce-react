import data from "../data/data.json";

export const pedirDatos = () => {
    return new Promise((resolve, reject) => {
        resolve(data);
    })
}