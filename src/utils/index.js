const maskCpf = (cpf) => {
  let markedCpf = cpf
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");

  return markedCpf;
};

export { maskCpf };
