const CyclicDB = require('@cyclic.sh/dynamodb');

type MethodType = {
    id: string;
    title: string;
    desc: string;
};

const db = CyclicDB("blush-coyote-sariCyclicDB");

export const getMethods = async (): Promise<MethodType[]> => {
    const collection = db.collection('methods');
    const { results } = await collection.list();
    const keys = results.map((item) => item.key);
    const methods = [];
    for (let i = 0; i < keys.length; i++) {
        methods.push(await collection.get(keys[i]));
    }
    return methods.map((item) => ({
        id: item.key,
        title: item.props.title,
        desc: item.props.desc
    }));
};