// Custom Map Function
function mapList(arr, mapFunc) {
    const mapArr = [];
    for (let i = 0; i < arr.length; i++) {
      const result = mapFunc(arr[i], i, arr);
      mapArr.push(result);
    }
    return mapArr;
  }
  
  // Custom Filter Function
  function arrFilter(arr, filterFunc) {
    const filterArr = []; // empty array
    // loop though array
    for (let i = 0; i < arr.length; i++) {
      const result = filterFunc(arr[i], i, arr); // push the current element if result is true
      if (result) {
        filterArr.push(arr[i]);
      }
    }
    return filterArr;
  }
  
  // Custom Reduce Function
  function arrReduce(arr, reducer, initialValue) {
    let accumulator = initialValue === undefined ? 0 : initialValue;
    for (let i = 0; i < arr.length; i++)
      accumulator = reducer(accumulator, arr[i], i, arr);
    return accumulator;
  }
  
  const position = [
    {
      name: 'JavaScript Developer',
      salary: {
        from: 400,
        to: 3000,
      },
    },
    {
      name: 'PHP Developer',
      salary: {
        from: 300,
        to: 3200,
      },
    },
    {
      name: 'Python Developer',
      salary: {
        from: 450,
        to: 3800,
      },
    },
    {
      name: 'Java Developer',
      salary: {
        from: 500,
        to: 3300,
      },
    },
  ];
  
  // Averange for each postion
  let positionAvgSalary = mapList(position, position => {
    return {
      name: position,
      avgSalary: (position.salary.from + position.salary.to) / 2,
    };
  });
  
  // General Averange
  let avgGeneral = arrReduce(positionAvgSalary, function (total, n) {
    return total + n.avgSalary;
  });
  avgGeneral = avgGeneral / positionAvgSalary.length;
  
  // Filter below average
  const positionBelowFilter = arrFilter(
    positionAvgSalary,
    positionAvgSalary => positionAvgSalary.avgSalary < avgGeneral
  );
  
  // Filter above average
  const positionAboveFilter = arrFilter(
    positionAvgSalary,
    positionAvgSalary => positionAvgSalary.avgSalary > avgGeneral
  );
  
  //console.log(positionAvgSalary);
  //console.log(avgGeneral);
  //console.log(positionBelowFilter);
  console.log(positionAboveFilter);
  

