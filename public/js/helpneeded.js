const getHelpNeeded = async () => {
  const cut = '?org_cats=all&is_verify=1';

  const token = 'Y4JZFl56S0HAM1FPJW5OjxWRtPs6OdxKKCfmsFUAWMsIKEEKpFZlnd1bir81';
  const query = `organizations?org_cats=all&&is_verify=1&token=${token}`;
  const base = 'https://dev.nko.tochno.st/api/';
  const path = 'https://dev.nko.tochno.st/api/list/problems?token=Y4JZFl56S0HAM1FPJW5OjxWRtPs6OdxKKCfmsFUAWMsIKEEKpFZlnd1bir81';
  const path2 = 'https://dev.nko.tochno.st/api/organizations?problem_path=hiv&org_cats=all&is_verify=1&token=Y4JZFl56S0HAM1FPJW5OjxWRtPs6OdxKKCfmsFUAWMsIKEEKpFZlnd1bir81';

  const response0 = await fetch(base + query);
  const data0 = await response0.json();

  const response = await fetch(path);
  const data = await response.json();

  const response2 = await fetch(path2);
  const data2 = await response2.json();

  console.log('Help Needed API', data0, data, data2);

  return data;
}
