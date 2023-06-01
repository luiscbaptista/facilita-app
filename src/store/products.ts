import { create } from "zustand";
import axios from "axios";
import { ProductType } from "../config/types";
import Laranja from '../assets/laranja.webp'

type ProductState = {
  products: ProductType[],
}

export const useProductStore = create<ProductState>((set) => ({
  products: [
    {
      id: String(Math.random()),
      name: "Laranja",
      category: "Fruta",
      img_url: Laranja,
      description: "p/kg",
      price: 150,
      amount: 0,
      total: 0,
      inStock: 0,
      isAvailable: false
    },
    {
      id: String(Math.random()),
      name: "Tomate",
      category: "Vegetal",
      img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD736czwaU-0tujBMSxpQXqzZh_Vpqq5RMaQ&usqp=CAU",
      description: "p/kg",
      price: 150,
      amount: 0,
      total: 0,
      inStock: 0,
      isAvailable: false
    },
    {
      id: String(Math.random()),
      name: "Banana",
      category: "Fruta",
      img_url: "https://cdn.shopify.com/s/files/1/0363/3414/1572/products/oTkQJbN6XO.jpg?v=1598312017",
      description: "p/kg",
      price: 150,
      amount: 0,
      total: 0,
      inStock: 0,
      isAvailable: false
    },
    {
      id: String(Math.random()),
      name: "Cebola",
      category: "Vegetal",
      img_url: "https://static.multipromos.pt/images/6a/6a388298c76b8f245435215dae2bff3a.jpeg",
      description: "p/kg",
      price: 150,
      amount: 0,
      total: 0,
      inStock: 0,
      isAvailable: false
    },
    {
      id: String(Math.random()),
      name: "Cenoura",
      category: "Vegetal",
      img_url: "https://www.brasafrica.com/wp-content/uploads/2020/11/CENOURA-BRASILIA-IRECE.jpg",
      description: "p/kg",
      price: 150,
      amount: 0,
      total: 0,
      inStock: 0,
      isAvailable: false
    },
    {
      id: String(Math.random()),
      name: "Abacate",
      category: "Fruta",
      img_url: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPDw0PDw8ODg4QEA8QEA0PEBAPEBARFhUWFxcRFRUYHSggGBolGxUVIjEhJSo3Li4uGCA0ODUsNzQtLisBCgoKDg0OGhAQGy8lHyYvNy0vNzcuLSsyMi0tLi0rNS4vLS0tLS8tMC03LS0tLS0tNS0tLTUtLS0tLS0rLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAQUEBgcDAgj/xAA/EAACAQIEAwYDBQUGBwAAAAAAAQIDEQQSITEFBkETIlFhcYEHMpEUQlKhwSOCsdHwFXKisuHxFzNFVGKTwv/EABoBAQACAwEAAAAAAAAAAAAAAAABBAIDBQb/xAArEQEAAgIBAgQFBAMAAAAAAAAAAQIDEQQhMQUSQVEiMmGh0RMVYrEUI1P/2gAMAwEAAhEDEQA/AO4gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACASAIBIAgEgCASAIBIAgEgCASAIBIAgEgCASAIBIAgEgAAAAAAAAAAAIJAAEEgACCQABjcRx1PD0p1qsssI2u/NuyXu2gPatVjCMpzlGMYpuUpNJJLq29igx/N+GptKCnWvfvQi+zuujk9vW1vM5vzbzrUrTlFygop2jSjK8IvbNLVOXq9PZXeo4jHyq5nKSmktY3bur6Xvvu+6unXYr3za7NVsmuzrmJ+IOVpZaNOW7TnKq7e1iY88Vb606dnfRxcWvN3nr7I47Co7KVrtv5dU5Xvon1uvr6nvQpZb5Yu9vu3fglJWuldX+rNP+RLVOWXacJztTetSn3etSlJSivVPY2LAcRo11elUjPROyeqT6tH55i5QtKMnGSS7ytF399b7eO697LhvHKlKUZKqqct1UjLKnLTSUFdrfdaO70Mqcrr1TXPPq7+DUeVeco4l9jiFGjiFa0k/2dTzTez9Tbi3W0WjcLETExuAAEpAAAAAAAAAAAAAAAAAAAAAAAADmfxW424uOHg3lgs0srTvUle2njFWf7+zOmHDviHSbxuJjGm3JzcopLVt37zV7aOz16ee2GSdVY27NBxFfPNyvdNrVpXa8fXxv4sUpq27TUZXW6bvfTwVv4e5cYblHEVPwU0tN3K/sv5lxQ5Dk1adaT02jTS72+ZXbt6Lc5Obncek/FeP7/pqmNqDDVklCV82aKcls4PM8q9H2W/jNdCywsIuMFZWytupdLItU2lrd+XTT3tY8jSjlaqzupRk04pqVr6OzT+8+p8Q5Zr0pJqUJxyRjrHI4tK2e2zbSSbb163NFedxbzqLw12o8fsGkZNdnKV2qel4rM1HMrxUfler8G7X28sRw+TXyxz5msv3ZfdSte6at13T32tYYaM1JutCVLO46ybqZFOs24QlFuNkmlfreOzbisqnh1JzShCo3OplpypU5OKi8mVyvpG3X5d1ZdbcRExuGE1a5CvUouKlFSjF9xp3lGzasm9N+j1V9UjrXIPNP2mP2es0qsUuzbetSNtfVr+fhrzriGH7jWdSjFLNJrLUjbaF5K80ktHd/R2MDBYqphq2aDyZLSunJJaJq17O1rNeVtzKmWaT9E0vNZfogFRyzxuGNoRqRffXdqR2cZfye5bHSiYmNwuRO+qQCCUpBAAkAAAAAAAEAAAASBAAAHji8VTowlUqzjTpx3nJpJf6+RW8wcw08IlG3a4iSvChFpO34pv7sbrfr0T1tqFTDYjGzjUxMs1n3KaWWnTXhGP6vXzOfzPEcfH+Hvb2/KJnrqGfxDm+tWk6eCg6UeuIqxTm/OEHovWV/RGJhOB1KspVKspTnJ3lUnrKReYDhcKettT64nxWjhYrO25y+WnBZpvzt4ebPPZcvI5c/HPT2hupgmfmfNDhNOFll28bGbClFbJeyNGxPOFerLJRjGjo3mazVNLeOi9PzKbGcaxNs06+J1eiU5QV9dLJpG3F4dPfpC3GCIdUtH+keVXDQlvFepyNcex1NxyYivfRrNLtIy30SlfwNp5a5znUqQoYmCjKpmjCvG0YuUU5OM437rsnqn9NyM3AtEb6TCZwwuuJ8u06kZJJWad01dSW1muppvEcNUwlTtGnKmlJTtfO01bVpNyW3msvW50+nPa+5X8bwMakZXSenhcrYst+N8VPl9YUs2CNbho+CcayagoJpRi6akpXckt1K8ZR7yXrdXRVcRwaTyyu7auEJ2eV2nlUrNvZ2TXTS9nfG4i54erOEFZRcZxcrWsnaf8AetFqLT6JXvsZmH4uqq7NzgqXclrmU4ytdxezmtF3ls0r6Ntegrat6xMOfarz4Lxivw3ERqQv2ctXSbTVaGl1FrRteK2ttbftPBOLUcZRjXoSvB6NPSUJLeEl0aOS4nhkakXOlTjUjJ+H3ldKzs9bae2/ys+OUONvhmNnGedYSpKMKsZ3i6al8tWMG27Rd03+HV62Rtw5Zxzqeycd5rOp7O1gXJOitoAAEgAAAAAAAgEgAQA3bV6JbsCTUuYearSlh8G1Oqm4zr2UoUn+GPSUvyXnqlh8d5lniW6GDbjRfdniY/NUXVU/CP8A5bvpbdxwngsadtFsrLotDhc/xTU/pYJ6+s+yIibdIeHDOEtylVqtynJ5pzm7yb8W/Y2SnTUUrE06aXr+SMHmDiUcJhq+Il3uzjdR/HJ/LBeraOLjpNre8yt48MVV/M/MkMKnTjJdu45raPs4N2U5LzeiXXXomarRnaFfESq9pUqNau9SV7WcYpWt6LU0n7TLEYmdWtLNUq5ZSnfVPKtI66KN7I2/hmExCjFQpxjUdnlcu+oq94uHRXa1/M7lMEYY+q9WsaZmHw2ekskJU7WlZxyztrq30bstPBmFWopOG8ItNO9PM7W1TfvtYtY1MRGbjUjHSzlBWUmtdtTPhVoVoPvK97OOXK4teT1Ukns9dTfSYlhbcNHxMIqMoqM52zO8UmmlZJdLf6Mq4YyUMRTlTm4VINzvZSaaVrPXWLu1b1Ni4nhstsknG7f57Rs+t/1NXx+FjBKTU0082WTV/wC5putDPp2k6uycncaeOw/aSSjUpuMKij8t0rJp9b2v+8XdZaP6Gi/CT7S6GJqVZ/sXNU6VHIlZx1lLNu13ra/obrjJ5YvU4POpFb200X6bcs57io1qbsneTTj8rce7fvdFa5rcZruqOazlLNHNvH7rT2bzWe3uX/NrdWvFJ/Lmert8zsl/hbKh4ay6283FJLTrdfUv8Olo49N+zlzG5ZmF4jKEXCKlaTWisk9Eut97bEV8U627hJqHZppScopO7vJ/M9Lf0jyqRvTlCK1aUddEk9He/lcsOG8MnXqQpUIylKo5NRyRi4LZqT39W/DrcsRSbd5ZRhi1ZtM6069yXWlPh+DlNty7NRu9W1FuK166JF0YnCcCsPQo0VtTgot+Mur93dmWdasaiIZx2ASQZJSAAAAAAAACCQBpnPvEpN08DB5VUip1mt3BtqNP0k4yv5K2zZuRz7nGDp8SpTkrwq0YqD84Sakv8cH+8UPE73pxrTTumI3OmbwnhyhFaF0o6K1kY+GldJrqjIXoeSpEVhbpWK9H3Y1D4j4KVSjhWs7oKvbEOKzZIyi4wrOPVRnlv5Se2622LPuy/pFjFl8los2ROp255gKWBwtCEMTGM5pyfbNQtdrSKbdmrLRX18LmxcNlCWWooz77hNT7yUlfV6Pu217v8DNxfL2HqNz7OMZPfuxlF/uvp5IwJcFqUrRpQoZNs0Y5XZu7WS9kvRnUryqT6tvnrZkTl3qrq57Sdod1Tjl0SsnC99PPcq8VZpqLnG0rybjNOV1potLfy6ijwTEwq9p2MZb991ldp6Wyy2W2lzLlw7FyzN6OS1SlCGvRNwd2l7GyM1PeCZr7tU4twtVaTjUThGyeaXytJu0oq7bs1FlVT4JnqWpZqtabhFQqPvdW5P8ADo0/RdDfKPK87p1Jw+85Qleqm362t6fn0LfB4Kjhoya1m7udWTvKTer1/Q05udjpHSdyibxD45f4bHCYenQTzdmtZbZpNtyl9WYHHsY5ONGmnKc3ljFats8+J8c1dOkpTqSeWMIXcpPwSRecr8BlRvXxDUsTNaLRqjF/dT6y8X7LxdLi8fJzb/x9ZUM2XzzqHOMRyNjpValVzffd8m6StZJeyMrDcoVV/wAymm/FXOvWIyrwPWRjrEaiGnTQ+Gcn0W12lOcvLO0vyNw4dw6jQVqVKFK+7itX6vdmakCYpWO0GgkAySAAAAAAAAAAACAAZr/NOB7enFaKcJZoSeivazi30T/RGwnxOmpKzSZhkx1yVmlu0jneF4vKi3TqJxd9E/08V6GfDj0br6Gx4zgNCqmpR0fTRr6MpcTyHRl8tarTXhHRHByeCWif9d+n1PNZ4/26l4fU+6fHPT0uzwfw6j/3uJXplPl/Dnw4hi4+ipP+KNP7HyP+kff8Hnuy/wC3YO21z1hxen4299ir/wCHNRbcUxPvSoP/AORH4d1evE6z8+wo3Mf2TkxPzV+/4T+rkWsuM01s/wCCPGfH6a/3MGXw7qv/AKnX/wDRh7/5Safw5d/2mPxE14KFOH+VImPBeTPe8ff8H6uR54vmdJNqy9SvhisRi3lg2ot/O9vp1NlwfIOEptN56kvxTeZ/Vl/heF0qSShBIt4fA8VZ3ltNvtDGZtburOXOC08OsyjmqyVpVZaya8F4LyXvcv0go2B26UrSvlrGoIhIAMkgIAEggASCABIAAAAAAAIBIAgEgCASAIBIAgEkAASQABIAgAkCACQIBIAgEgCASAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9k=",
      description: "p/kg",
      price: 150,
      amount: 0,
      total: 0,
      inStock: 0,
      isAvailable: false
    },
    {
      id: String(Math.random()),
      name: "Alface",
      category: "Vegetal",
      img_url: "https://www.kikuxi.com/wp/wp-content/uploads/2020/08/ALFACE.jpg",
      description: "p/kg",
      price: 150,
      amount: 0,
      total: 0,
      inStock: 0,
      isAvailable: false
    },
  ]/*axios({
    method: 'get',
    url: '',
    responseType: ''
  }).then((response) => response.data)*/,  
}))