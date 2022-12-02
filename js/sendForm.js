const server = 'https://jsonplaceholder.typicode.com/posts';

const sendData = (data, callBack, falseCallBack) => {
  const request = new XMLHttpRequest();
  request.open('POST', server);

  request.addEventListener('readystatechange', () => {
    if (request.readyState !== 4) return;
    if (request.status === 200 || request.status === 201) {
      const response = JSON.parse(request.responseText);
      callBack(response.id);
    } else {
      falseCallBack(request.status);
      throw new Error(request.status);
    }
  });

  request.send(data);
};

const formElems = document.querySelectorAll('.form');

const formHandler = (form) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = {};

    for (const { name, value } of form.elements) {
      if (name) {
        data[name] = value;
      }
    }

    const smallElem = document.createElement('small');
    const formBtn = document.querySelector('.form__button');
    const modalBtn = document.querySelector('.modal__button');

    if (data.value !== '') {
      sendData(
        JSON.stringify(data),
        (id) => {
          smallElem.innerHTML = `Your application №${id}. <br>We will contact You soon.`;
          smallElem.style.color = 'green';
          form.append(smallElem);
        },
        () => {
          smallElem.textContent =
            'Unfortunately, this server is currently unavailable.\n try submitting the application later. ';
          smallElem.style.color = 'red';
          form.append(smallElem);
        }
      );
    } else {
      return;
    }

    formBtn.disabled = true;
    modalBtn.disabled = true;

    setInterval(() => {
      if (smallElem.innerHTML) {
        smallElem.innerHTML = '';
      } else if (smallElem.textContent) {
        smallElem.textContent = '';
      }
      formBtn.disabled = false;
      modalBtn.disabled = false;
    }, 5000);

    form.reset();
  });
};

formElems.forEach(formHandler);
