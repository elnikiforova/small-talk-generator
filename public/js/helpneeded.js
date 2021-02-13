const getHelpNeeded = async () => {

  const path = 'https://dev.nko.tochno.st/api/organizations?org_cats=all&is_verify=1&token=Y4JZFl56S0HAM1FPJW5OjxWRtPs6OdxKKCfmsFUAWMsIKEEKpFZlnd1bir81';

  const response = await fetch(path);
  const data = await response.json();

  console.log('Help Needed API', data);

  return data;
}
