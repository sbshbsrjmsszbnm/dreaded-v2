module.exports = async (context) => {

const { client, m, text, fetchJson } = context;


try {


const data = await fetchJson('https://api.dreaded.site/api/fact');

const fact = data.result.fact;

await m.reply(fact);

} catch (error) {

m.reply('Something is wrong.')

}

}
