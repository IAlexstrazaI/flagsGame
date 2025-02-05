<template>
  <main>
    <h2>{{ msg }}</h2>
    <table id="countryTable" class="countrytable__table">
      <thead>
        <tr>
          <th class="countrytable__th">Наименование</th>
          <th class="countrytable__th">На английском</th>
          <th class="countrytable__th">Alpha3</th>
          <th class="countrytable__th">Часть света</th>
          <th class="countrytable__th">Соседи</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="country in countries" :key="country.alpha3" class="countrytable__tr">
          <td class="countrytable__td">{{ country.name }}</td>
          <td class="countrytable__td">{{ country.english }}</td>
          <td class="countrytable__td">{{ country.alpha3 }}</td>
          <td class="countrytable__td">{{ country.location }}</td>
          <td class="countrytable__td">
            <ul class="countrytable__ul">
              <li
                v-if="country.neighbours && country.neighbours.length > 0"
                v-for="code in country.neighbours"
                :key="code"
              >
                {{ getCountryName(code) }}
              </li>
              <li v-else>Нет данных</li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<script setup>
defineProps({
  msg: {
    type: String,
    required: false,
    default: 'Таблица для отладки данных',
  },
})

import { ref, onMounted } from 'vue'
import countriesData from '/src/data/countries.json'

// Create a reactive variable to hold countries
const countries = ref([])

// Create a mapping of country codes to country names
const countryNamesMap = countriesData['country-list'].country.reduce((acc, country) => {
  acc[country.alpha2] = country.name // Mapping Alpha2 code to country name
  acc[country.alpha3] = country.name // Mapping Alpha3 code to country name (optional)
  return acc
}, {})

// Function to get country name by code
const getCountryName = (code) => {
  return countryNamesMap[code] || code // Fallback to code if not found
}

// On component mount, set the countries data
onMounted(() => {
  countries.value = countriesData['country-list'].country
})
</script>
