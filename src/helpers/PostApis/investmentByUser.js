import axios from 'axios';
import { encryptData } from '../encryption_decryption/Encryption';
import { decryptData } from '../encryption_decryption/Decryption';

async function InvestmentByUser(userId, amount, selectedOption) {
  try {
    const releaseBody = {
      userId: userId,
      amount: amount,
      investmentTypeId: selectedOption
    };
    console.log(releaseBody, "api")
    const encryptedPostData = await encryptData(releaseBody);
    console.log(encryptedPostData, "encrypted data")


    const response = await axios.post(`${import.meta.env.VITE_APP_API}/api/users/investment`,
      { data: encryptedPostData },
      {
        headers: {
          "Content-Type": "application/json",
        },
      });

    const encryptedData = response.data.data;

    // Decrypt the encrypted data
    const decryptedData = await decryptData(encryptedData);
    console.log('Decrypted response:', decryptedData);
    return decryptedData;
  } catch (error) {
    console.error('Error fetching data From Release API:', error);
    return [];
  }
}

export default InvestmentByUser;