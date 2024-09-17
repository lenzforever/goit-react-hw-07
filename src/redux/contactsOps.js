import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// URL для API
const API_URL = 'https://66e7ffc8b17821a9d9dae4f4.mockapi.io/contacts';

// Асинхронный запрос для получения контактов
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get(API_URL);
      return data; // data попадет в action.payload
    } catch (err) {
      return thunkApi.rejectWithValue(err.message); // err попадет в action.payload
    }
  }
);

// Асинхронный запрос для удаления контакта
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactID, thunkApi) => {
    try {
      const { data } = await axios.delete(`${API_URL}/${contactID}`);
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

// Асинхронный запрос для добавления контакта
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contactData, thunkApi) => {
    try {
      const { data } = await axios.post(API_URL, contactData);
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);
