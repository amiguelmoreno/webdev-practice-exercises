function getElementByIdCustom(id) {
  // Iniciar la búsqueda desde el elemento raíz del documento
  let rootNode = document.documentElement;

  // Función auxiliar para recorrer recursivamente los nodos del árbol DOM
  function findElement(node) {
    // Verificar si el nodo actual tiene un atributo "id" y si coincide con el ID proporcionado
    if (node.id === id) {
      return node;
    }

    // Recorrer los nodos hijos del nodo actual
    for (let i = 0; i < node.childNodes.length; i++) {
      let child = node.childNodes[i];

      // Si el nodo hijo es un elemento, realizar la búsqueda recursiva
      if (child.nodeType === 1) {
        let result = findElement(child);
        if (result) {
          return result; // Devolver el resultado si se encuentra
        }
      }
    }

    // Devolver null si no se encuentra ningún elemento con el ID especificado
    return null;
  }

  // Iniciar la búsqueda desde el nodo raíz del documento
  return findElement(rootNode);
}

// Ejemplo de uso
let miElemento = getElementByIdCustom("acerca");

console.log(miElemento);
