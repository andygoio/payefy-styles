(function() {
  'use strict';

  /**
   * Función para agregar los gráficos de la tarjeta Payefy
   * Asegura que la tarjeta se vea igual que en la vista principal
   */
  function addPayefyCardGraphics() {
    // Verificar si ya se agregaron los gráficos
    if (document.getElementById('payefy-card-graphics')) {
      return;
    }

    // Encontrar el contenedor de la tarjeta (tabla o div principal)
    const cardContainer = document.querySelector('table') || 
                         document.querySelector('body > div') || 
                         document.body;
    
    if (!cardContainer) {
      console.warn('[Payefy Card] No se encontró el contenedor de la tarjeta');
      return;
    }

    // Asegurar que el contenedor tenga position relative
    if (cardContainer instanceof HTMLElement) {
      const computedStyle = window.getComputedStyle(cardContainer);
      if (computedStyle.position === 'static') {
        cardContainer.style.position = 'relative';
      }
    }

    // Crear contenedor para los gráficos
    const graphicsContainer = document.createElement('div');
    graphicsContainer.id = 'payefy-card-graphics';
    graphicsContainer.style.cssText = 'position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 10; overflow: visible;';

    // Logo Payefy (arriba derecha) - posición: top: 16px, right: 16px
    const payefyLogo = document.createElement('div');
    payefyLogo.id = 'payefy-logo';
    payefyLogo.style.cssText = 'position: absolute; top: 16px; right: 16px; width: 140px; height: 35px; z-index: 10; pointer-events: none;';
    const payefyLogoSVG = '<svg width="140" height="35" viewBox="0 0 360 86" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1_7)"><path d="M130.737 43.5741C130.737 56.8411 121.954 66.1447 109.473 66.1447C103.699 66.1447 98.3779 63.5012 95.3627 59.3781C95.0879 59.0053 94.4962 59.2107 94.4962 59.6748V84.3868H85.9924V22.1104H94.4962V24.887C94.4962 26.2221 96.0878 26.8383 97.0535 25.9102C100.233 22.8521 104.916 21.0073 110.027 21.0073C122.324 21.0073 130.737 30.1284 130.737 43.5779V43.5741ZM122.137 43.5741C122.137 34.9133 116.405 28.7439 108.271 28.7439C100.137 28.7439 94.126 34.8258 94.126 43.5741C94.126 52.3224 99.9504 58.4995 108.271 58.4995C116.592 58.4995 122.137 52.2349 122.137 43.5741Z" fill="#AEFF9A"/><path d="M134.053 43.574C134.053 30.9536 142.191 21.0034 155.595 21.0034C160.233 21.0034 164.397 22.5173 167.37 25.1379C168.508 26.1421 170.294 25.3281 170.294 23.8143V22.1065H178.893V65.129H170.294V60.0284C170.294 59.5682 169.706 59.359 169.431 59.7279C166.443 63.7293 160.928 66.1408 155.408 66.1408C141.634 66.1408 134.053 56.1906 134.053 43.5702V43.574ZM170.664 43.574C170.664 35.5598 165.855 28.7438 156.611 28.7438C148.011 28.7438 142.744 35.0996 142.744 43.574C142.744 52.0484 148.015 58.4081 156.611 58.4081C165.855 58.4081 170.664 51.592 170.664 43.574Z" fill="#AEFF9A"/><path d="M185.813 84.7558V76.6503C187.385 77.1106 189.42 77.3882 190.897 77.3882C195.057 77.3882 199.218 75.2696 201.156 69.9256L202.267 66.9778L184.332 22.1143H193.298L207.164 57.309L219.462 22.1143H228.706L209.385 71.9567C205.412 82.3672 198.756 85.5926 190.989 85.5926C188.771 85.5926 187.843 85.315 185.813 84.7634V84.7558Z" fill="#AEFF9A"/><path d="M272.153 46.248H239.149C239.332 54.0797 244.42 58.5946 252.37 58.5946C257.824 58.5946 261.431 56.5672 263.187 52.699H271.969C270.492 60.6219 262.538 66.1485 252.37 66.1485C238.966 66.1485 230.553 57.3964 230.553 43.5779C230.553 29.7594 239.057 21.0073 252 21.0073C264.202 21.0073 272.431 29.2992 272.431 41.1816C272.431 42.84 272.34 44.1294 272.153 46.248ZM263.924 39.6146C263.832 32.2432 259.489 27.9147 251.813 27.9147C244.137 27.9147 239.424 32.6121 239.149 39.6146H263.924Z" fill="#AEFF9A"/><path d="M334.542 22.1104L322.244 57.3051L309.237 24.2936C308.718 22.9776 307.443 22.118 306.023 22.1218L291.092 22.2016V15.2905C291.092 8.37934 295.344 7.73273 298.763 7.73273C300.336 7.73273 301.721 8.01039 303.111 8.28425V0.920472C301.725 0.36895 299.412 0 296.454 0C291.649 0 282.496 2.11861 282.496 15.4769V22.2016H273.344V29.4779H282.496V65.0378H291.095V29.4779H302.355L317.344 66.9739L316.233 69.9217C314.294 75.2657 310.13 77.3843 305.973 77.3843C304.492 77.3843 302.462 77.1067 300.889 76.6464V84.7519C302.924 85.3035 303.847 85.5811 306.065 85.5811C313.832 85.5811 320.489 82.3595 324.462 71.9452L343.782 22.1027H334.538L334.542 22.1104Z" fill="#AEFF9A"/><path d="M350.973 19.7028C350.973 17.1544 352.683 15.1118 355.489 15.1118C358.294 15.1118 360.004 17.1544 360.004 19.7028C360.004 22.2512 358.294 24.2785 355.489 24.2785C352.683 24.2785 350.973 22.236 350.973 19.7028ZM359.122 19.7028C359.122 17.5842 357.737 15.8649 355.485 15.8649C353.233 15.8649 351.847 17.5842 351.847 19.7028C351.847 21.8214 353.218 23.5254 355.485 23.5254C357.752 23.5254 359.122 21.8062 359.122 19.7028ZM354.084 17.4624H355.794C356.702 17.4624 357.29 18.1547 357.29 18.9839C357.29 19.5963 356.935 20.1364 356.336 20.3494L357.244 21.81H356.443L355.611 20.4445H354.794V21.81H354.084V17.4624ZM355.748 19.8283C356.24 19.8283 356.55 19.4289 356.55 18.9839C356.55 18.4932 356.24 18.1091 355.748 18.1091H354.824V19.8283H355.748Z" fill="#AEFF9A"/><path d="M45.7328 52.8551H16.1985C15.9771 52.8551 15.7939 52.6763 15.7939 52.4519V30.9577C15.7939 30.7371 15.9733 30.5546 16.1985 30.5546H31.7634C32.458 30.5546 33.0191 31.1137 33.0191 31.8059V46.4764C33.0191 46.6971 33.1985 46.8796 33.4237 46.8796H49.9351C50.1565 46.8796 50.3397 46.7009 50.3397 46.4764V35.4156C50.3397 32.6846 48.1183 30.4747 45.3817 30.4747H34.374C33.6794 30.4747 33.1183 29.9156 33.1183 29.2233V19.3377C33.1183 17.0061 31.2214 15.1157 28.8817 15.1157H6.84351C3.06489 15.1119 0 18.1662 0 21.9318V73.3603C0 78.8717 4.48473 83.341 10.0153 83.341H15.3893C15.6107 83.341 15.7939 83.1622 15.7939 82.9378V67.8147C15.7939 67.5941 15.9733 67.4115 16.1985 67.4115H50.0305C50.2519 67.4115 50.4351 67.2327 50.4351 67.0083V57.5335C50.4351 54.9433 48.3282 52.8475 45.7328 52.8475V52.8551Z" fill="#AEFF9A"/></g><defs><clipPath id="clip0_1_7"><rect width="360" height="85.5849" fill="white"/></clipPath></defs></svg>';
    payefyLogo.innerHTML = payefyLogoSVG;

    // Contenedor para Chip y Contactless (arriba izquierda) - posición: top: 55px, left: 28px
    const chipContainer = document.createElement('div');
    chipContainer.id = 'chip-contactless-container';
    chipContainer.style.cssText = 'position: absolute; top: 55px; left: 28px; display: flex; flex-direction: row; align-items: center; gap: 12px; z-index: 10; pointer-events: none;';

    // Chip EMV
    const chip = document.createElement('div');
    chip.style.cssText = 'width: 36px; height: 24px; flex-shrink: 0;';
    const chipSVG = '<svg width="36" height="24" viewBox="0 0 9000 6200" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3800 6200h1500c100-300 0-1500 0-1800 100-200 700-400 700-1300 0-300-200-700-400-1000-400-300-300-100-300-1100 0-400 0-700 0-1000h-1600c0 400 100 1700 0 1900 0 100 0 100-100 100l-200 200c-300 500-400 1100-100 1600 200 400 400 400 400 500 100 300 0 1600 100 1900z" fill="#E4C475"/><path d="M0 2100h3100l300-300c0-100 0-400 0-600 0-400 0-800 0-1200-500 0-2300 0-2700 100-900 300-700 1200-700 2000z" fill="#E4C475"/><path d="M6000 2100h3000V1100c0-600-400-1100-1100-1100-300 0-2100 0-2200 0 0 400 0 800 0 1200 0 800-100 500 100 700 100 100 100 200 200 200z" fill="#E4C475"/><path d="M9000 5200V4200H5900s-200 200-200 300v1700c100 0 1800 0 2100 0 400 0 700-100 900-200 100-200 300-500 300-800z" fill="#E4C475"/><path d="M1000 6200h2400V4500c-400-400-200-300-600-300H0c0 400 0 1000 100 1400 200 300 600 600 900 600z" fill="#E4C475"/><path d="M0 3800h2900c0-200-100-300-100-700 0-300 0-400 100-700H0v1400z" fill="#E4C475"/><path d="M6100 3800h2900c100-100 0-1100 0-1400H6200c100 400 100 700 0 1100 0 100 0 200-100 300z" fill="#E4C475"/></svg>';
    chip.innerHTML = chipSVG;

    // Símbolo contactless (al lado del chip) - color verde #AEFF9A, tamaño 28x28px
    const contactless = document.createElement('div');
    contactless.id = 'contactless-icon';
    contactless.style.cssText = 'width: 28px; height: 28px; flex-shrink: 0;';
    const contactlessSVG = '<svg width="28" height="28" viewBox="0 0 9589800 12153500" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7348700 12124700c-195700-57000-393400-288800-434200-510200-27600-144500 5700-245200 211900-644300 836200-1617300 1199200-3104400 1199200-4909800 0-1745600-321200-3102505-1120400-4730200-171000-349700-311600-673700-311600-720300 0-173000 144400-424800 302100-522600 214800-135000 574900-110300 747900 52300 66500 61700 238500 344900 382900 628100 571100 1122200 963500 2353700 1156400 3635500 119800 792500 143500 2295800 47500 3021700-175800 1339900-529200 2534300-1095600 3705900-342000 707900-556800 998700-736400 998700-36100 0-95000 8600-130200 20000-36100 10400-134900 0-219500-24700zm-2326100-1217200c-299300-86500-515000-454200-428600-728800 20900-66600 161600-373500 312600-682300 640500-1304700 906600-2704300 776400-4077400-107400-1128900-309800-1841600-819100-2883000-342100-698400-358200-806700-159600-1088000 189000-268000 661300-310700 909300-83600 172000 157700 706000 1273300 912200 1905200 682300 2090500 577800 4335900-296400 6389300-448500 1052800-763100 1377800-1206800 1248600zm-2398400-1233400c-185300-83600-344000-279400-387700-476100-26600-120600 19000-252700 238500-697400 805800-1631600 814400-3203200 26600-4796800-345800-699300-353400-839000-60800-1114600 144500-136800 205300-160600 408600-160600 340200 0 516000 171100 820100 795400 467500 959700 659400 1793100 657500 2860200-1900 1097500-180500 1851000-680400 2863000-286000 580600-427600 733600-713600 772500-87400 12400-226100-8500-308800-45600zm-2238700-1149800c-146400-60800-313600-260300-363000-433300-55100-193800-10500-346800 210000-708800 282200-464700 348700-714600 348700-1321800 0-608100-66500-857100-348700-1322700-96000-157700-192000-345900-213800-419100-91200-306900 163400-682200 506500-746800 290700-54200 491200 75000 758200 493100 773500 1207800 773500 2821200-900 4019500-272700 422800-577700 572000-897000 439900z" fill="#AEFF9A"/></svg>';
    contactless.innerHTML = contactlessSVG;
    
    // Asegurar que el SVG tenga el color verde después de insertarlo
    setTimeout(function() {
      const svgPaths = contactless.querySelectorAll('svg path');
      svgPaths.forEach(function(path) {
        path.setAttribute('fill', '#AEFF9A');
        path.style.fill = '#AEFF9A';
      });
      const svg = contactless.querySelector('svg');
      if (svg) {
        svg.style.fill = '#AEFF9A';
      }
    }, 10);

    // Agregar chip y contactless al contenedor
    chipContainer.appendChild(chip);
    chipContainer.appendChild(contactless);

    // Logo Visa (abajo derecha) - posición: bottom: 20px, right: 20px
    const visaLogo = document.createElement('div');
    visaLogo.id = 'payefy-visa-logo';
    visaLogo.style.cssText = 'position: absolute; bottom: 20px; right: 20px; width: 56px; height: 20px; z-index: 10; pointer-events: none;';
    const visaLogoSVG = '<svg width="56" height="20" viewBox="0 0 598400 193900" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M389900 0c-42500 0-80500 22000-80500 62700 0 46700 67300 49900 67300 73400 0 9900-11300 18700-30600 18700-16800-100-33200-4400-47900-12400l-8800 41100c17400 6900 36100 10400 54900 10400 0 0 100 0 100 0 46500 0 83100-23000 83100-64500 0-49300-67600-52400-67600-74200 0-7700 9200-16100 28500-16100 13600 200 27100 3200 39500 9000l8600-39700c-14600-5500-30100-8400-45700-8400-300 0-600 0-900 0zm-388900 3000l-1000 6000c11600 2200 23000 5500 34000 9800 20800 7400 22200 11800 25700 25400l38100 146700h51000l78500-187900h-50800l-50500 127700-20600-108200c-1900-12400-11600-19500-23100-19500H1000zm246800 0l-39900 187900h48500l39700-187900h-48400zm270700 0c-11700 0-17900 6300-22500 17200l-71100 170700h50800l9900-28500h61900l6000 28500h44900l-39200-187900h-40700zm6600 50800l15100 70500h-40400l25400-70500z" fill="#ffffff"/></svg>';
    visaLogo.innerHTML = visaLogoSVG;

    // Agregar todos los elementos al contenedor de gráficos
    graphicsContainer.appendChild(payefyLogo);
    graphicsContainer.appendChild(chipContainer);
    graphicsContainer.appendChild(visaLogo);

    // Agregar el contenedor de gráficos al contenedor de la tarjeta
    if (cardContainer instanceof HTMLElement) {
      cardContainer.appendChild(graphicsContainer);
      console.log('[Payefy Card] Gráficos agregados correctamente');
    }
  }

  /**
   * Función para ajustar las posiciones del contenido de la tarjeta
   */
  function adjustCardContentPositions() {
    // Asegurar que la tabla tenga altura adecuada
    const table = document.querySelector('table');
    if (table) {
      table.style.setProperty('height', '100%', 'important');
      table.style.setProperty('position', 'relative', 'important');
      table.style.setProperty('display', 'table', 'important');
    }

    // Buscar todas las filas y ajustar su posicionamiento
    const allRows = document.querySelectorAll('tr');
    allRows.forEach(function(row) {
      const panField = row.querySelector('[data-field="pan"]');
      const expirationField = row.querySelector('[data-field="expiration"]');
      const codeField = row.querySelector('[data-field="code"]');
      const nameField = row.querySelector('[data-field="name"]');

      if (panField) {
        // PAN va en la parte inferior, alineado a la izquierda con el chip
        row.style.setProperty('position', 'absolute', 'important');
        row.style.setProperty('bottom', '20px', 'important');
        row.style.setProperty('left', '28px', 'important');
        row.style.setProperty('right', '80px', 'important');
        row.style.setProperty('width', 'auto', 'important');
        row.style.setProperty('text-align', 'left', 'important');
        row.style.setProperty('padding-left', '0', 'important');
        row.style.setProperty('margin-left', '0', 'important');
        
        // Ajustar las celdas dentro de la fila
        const cells = row.querySelectorAll('td, th');
        cells.forEach(function(cell) {
          cell.style.setProperty('padding-left', '0', 'important');
          cell.style.setProperty('padding-right', '0', 'important');
          cell.style.setProperty('text-align', 'left', 'important');
          cell.style.setProperty('margin-left', '0', 'important');
          cell.style.setProperty('width', 'auto', 'important');
        });
        
        // Ajustar el campo PAN directamente
        panField.style.setProperty('text-align', 'left', 'important');
        panField.style.setProperty('padding-left', '0', 'important');
        panField.style.setProperty('margin-left', '0', 'important');
        panField.style.setProperty('display', 'inline-block', 'important');
        panField.style.setProperty('white-space', 'nowrap', 'important');
      } else if (nameField) {
        // El nombre va justo arriba del PAN, alineado a la izquierda
        row.style.setProperty('position', 'absolute', 'important');
        row.style.setProperty('bottom', '65px', 'important');
        row.style.setProperty('left', '28px', 'important');
        row.style.setProperty('right', 'auto', 'important');
        row.style.setProperty('width', 'auto', 'important');
        row.style.setProperty('text-align', 'left', 'important');
        row.style.setProperty('padding-left', '0', 'important');
        row.style.setProperty('margin-left', '0', 'important');
        
        // Ajustar las celdas dentro de la fila
        const cells = row.querySelectorAll('td, th');
        cells.forEach(function(cell) {
          cell.style.setProperty('padding-left', '0', 'important');
          cell.style.setProperty('padding-right', '0', 'important');
          cell.style.setProperty('text-align', 'left', 'important');
          cell.style.setProperty('margin-left', '0', 'important');
        });
        
        // Ajustar el campo name directamente
        nameField.style.setProperty('text-align', 'left', 'important');
        nameField.style.setProperty('padding-left', '0', 'important');
        nameField.style.setProperty('margin-left', '0', 'important');
      } else if (expirationField || codeField) {
        // Expiration y CVV van arriba del nombre, alineados a la izquierda
        row.style.setProperty('position', 'absolute', 'important');
        row.style.setProperty('bottom', '45px', 'important');
        row.style.setProperty('left', '28px', 'important');
        row.style.setProperty('right', 'auto', 'important');
        row.style.setProperty('width', 'auto', 'important');
        row.style.setProperty('text-align', 'left', 'important');
        row.style.setProperty('padding-left', '0', 'important');
        row.style.setProperty('margin-left', '0', 'important');
        
        // Ajustar las celdas dentro de la fila
        const cells = row.querySelectorAll('td, th');
        cells.forEach(function(cell) {
          cell.style.setProperty('padding-left', '0', 'important');
          cell.style.setProperty('padding-right', '0', 'important');
          cell.style.setProperty('text-align', 'left', 'important');
          cell.style.setProperty('margin-left', '0', 'important');
        });
        
        // Ajustar los campos expiration y code directamente
        if (expirationField) {
          expirationField.style.setProperty('text-align', 'left', 'important');
          expirationField.style.setProperty('padding-left', '0', 'important');
          expirationField.style.setProperty('margin-left', '0', 'important');
        }
        if (codeField) {
          codeField.style.setProperty('text-align', 'left', 'important');
          codeField.style.setProperty('padding-left', '0', 'important');
          codeField.style.setProperty('margin-left', '0', 'important');
        }
      }
    });

    // Asegurar que todos los elementos con data-field sean visibles y estén alineados
    const allFields = document.querySelectorAll('[data-field]');
    allFields.forEach(function(field) {
      field.style.setProperty('visibility', 'visible', 'important');
      field.style.setProperty('opacity', '1', 'important');
      field.style.setProperty('display', 'block', 'important');
      field.style.setProperty('color', '#ffffff', 'important');
      field.style.setProperty('text-align', 'left', 'important');
      field.style.setProperty('padding-left', '0', 'important');
      field.style.setProperty('margin-left', '0', 'important');
      field.style.setProperty('padding-right', '0', 'important');
      field.style.setProperty('margin-right', '0', 'important');
      
      // Resetear cualquier padding o margin en el elemento padre (celda)
      const parentCell = field.closest('td, th');
      if (parentCell) {
        parentCell.style.setProperty('padding-left', '0', 'important');
        parentCell.style.setProperty('padding-right', '0', 'important');
        parentCell.style.setProperty('margin-left', '0', 'important');
        parentCell.style.setProperty('margin-right', '0', 'important');
        parentCell.style.setProperty('text-align', 'left', 'important');
      }
    });
    
    // Resetear padding y margin en todas las celdas que contengan data-field
    const allCells = document.querySelectorAll('td, th');
    allCells.forEach(function(cell) {
      const hasDataField = cell.querySelector('[data-field]');
      if (hasDataField) {
        cell.style.setProperty('padding-left', '0', 'important');
        cell.style.setProperty('padding-right', '0', 'important');
        cell.style.setProperty('margin-left', '0', 'important');
        cell.style.setProperty('margin-right', '0', 'important');
        cell.style.setProperty('text-align', 'left', 'important');
      }
    });
  }

  // Ejecutar cuando el DOM esté listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      addPayefyCardGraphics();
      adjustCardContentPositions();
    });
  } else {
    // Si el DOM ya está listo, ejecutar inmediatamente
    addPayefyCardGraphics();
    adjustCardContentPositions();
  }

  // También ejecutar después de un pequeño delay para asegurar que todo esté cargado
  setTimeout(function() {
    addPayefyCardGraphics();
    adjustCardContentPositions();
  }, 100);

  // Observar cambios en el DOM y reaplicar si es necesario
  if (document.body) {
    const observer = new MutationObserver(function(mutations) {
      let shouldReapply = false;
      mutations.forEach(function(mutation) {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          shouldReapply = true;
        }
      });
      if (shouldReapply) {
        setTimeout(function() {
          addPayefyCardGraphics();
          adjustCardContentPositions();
        }, 50);
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }
})();

