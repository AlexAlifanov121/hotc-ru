/**
 * Attio Form Hook — intercepts Tilda form submission and sends data to Attio
 */
(function () {
  var WORKER_URL = 'https://heartofthecity-attio.a821ka.workers.dev';

  document.addEventListener('DOMContentLoaded', function () {
    var originalSuccess = window.t_forms__onSuccess;

    window.t_forms__onSuccess = function (formId) {
      if (typeof originalSuccess === 'function') {
        originalSuccess.apply(this, arguments);
      }

      var form = document.getElementById(formId);
      if (!form) return;

      var data = {
        source: 'heartofthecity website'
      };

      var nameInput = form.querySelector('[name="Name"]');
      if (nameInput) data.name = nameInput.value;

      var phoneInput = form.querySelector('[name="Phone"]');
      if (phoneInput) data.phone = phoneInput.value;

      var emailInput = form.querySelector('[name="Email"]');
      if (emailInput) data.email = emailInput.value;

      var radioGroups = form.querySelectorAll('.t-input-group_rd');
      radioGroups.forEach(function (group) {
        var fieldName = group.getAttribute('data-field-name') || '';
        var checked = group.querySelector('input[type="radio"]:checked');
        if (!checked) return;
        var label = group.querySelector('label[for="' + checked.id + '"]');
        var value = label ? label.textContent.trim() : checked.value;

        if (fieldName.indexOf('purpose') >= 0 || fieldName.indexOf('Purpose') >= 0) {
          data.purpose = value;
        } else if (fieldName.indexOf('visit') >= 0 || fieldName.indexOf('Visit') >= 0) {
          data.visit_timing = value;
        } else if (fieldName.indexOf('money') >= 0 || fieldName.indexOf('Money') >= 0 || fieldName.indexOf('spend') >= 0) {
          data.budget = value;
        }
      });

      var bedroomsInput = form.querySelector('[name="How many bedrooms are needed"]');
      if (bedroomsInput) data.bedrooms = bedroomsInput.value;

      var suggestionsInput = form.querySelector('textarea');
      if (suggestionsInput && suggestionsInput.value) {
        data.suggestions = suggestionsInput.value;
      }

      if (data.name || data.email || data.phone) {
        fetch(WORKER_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        }).catch(function (err) {
          console.error('Attio sync error:', err);
        });
      }
    };
  });
})();