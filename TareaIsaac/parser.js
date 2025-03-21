export const parser = (req) => {
    return new Promise((resolve, reject) => {
        let chunks = [];
        req.on("data", (chunk) => {
            chunks.push(chunk);
        });
        req.on("end", () => {
            const data = Buffer.concat(chunks).toString();
            try {
                const json = JSON.parse(data);
                resolve(json);
            } catch (error) {
                reject(error);
            }
        });
    });
};
