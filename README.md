# Домашнє завдання до Теми 4

### Опис завдання

У цьому домашньому завданні необхідно опрацювати три окремі приклади застосування породжувальних патернів: Одинак, Будівельник та Прототип.

Кожен приклад подано як реалістичну задачу з практичного TypeScript-контексту. Ваше завдання — проаналізувати початковий код та застосувати відповідний патерн, переписавши реалізацію.

## Структура проєкту

```
src/
├── builder/          # Builder pattern implementation
│   ├── DocumentBuilder.ts
│   └── main.ts
├── prototype/        # Prototype pattern implementation
│   ├── UserProfilePrototype.ts
│   ├── UserProfile.ts
│   └── main.ts
└── singleton/        # Singleton pattern implementation
    ├── AppConfigService.ts
    └── main.ts
```

## Запуск

1. Встановити залежності:

```bash
npm install
```

2. Запустити приклад Builder патерну:

```bash
npm run builder

# результат
=== ACME Corporation — Report ===

Quarterly performance increased by 12%.

--- Confidential ---
```

3. Запустити приклад Prototype патерну:

```bash
npm run prototype

# результат
UserProfile {
  username: 'Гупало Іван',
  department: 'finance',
  permissions: {
    canEditUsers: true,
    canApproveBudget: true,
    canAccessInternalTools: true
  }
}
UserProfile {
  username: 'Коваль Максим',
  department: 'finance',
  permissions: {
    canEditUsers: false,
    canApproveBudget: true,
    canAccessInternalTools: true
  }
}
```

4. Запустити приклад Singleton патерну:

```bash
npm run singleton

# результат
true
Acme Inc.
Acme Inc.
```

Для розробки з автоматичною перезбіркою:

```bash
npm run dev
```

## Використані патерни

**Одинак (Singleton):**

- Мета: забезпечити єдиний глобальний екземпляр сервісу конфігурації для всього застосунку.
- Застосування в цьому репозиторії: `AppConfigService` у `src/singleton/AppConfigService.ts` має приватний конструктор і статичний `getInstance()` — це гарантує, що всі модулі отримують одну і ту ж конфігурацію.

**Будівельник (Builder):**

- Мета: відокремити процес побудови складного об'єкта від його представлення, надати зрозумілий, ланцюжковий API для конфігурації і створення вихідного рядка.
- Застосування: `DocumentBuilder` у `src/builder/DocumentBuilder.ts` збирає частини документу (`header`, `body`, `footer`) у фіксованому порядку незалежно від порядку викликів методів.

**Прототип (Prototype):**

- Мета: створювати нові об'єкти шляхом копіювання існуючих замість побудови з нуля, особливо коли створення об'єкта дорожче або містить багато початкових налаштувань.
- Застосування: `UserProfile` у `src/prototype/UserProfile.ts` реалізує інтерфейс `UserProfilePrototype` і метод `clone()`, який повертає незалежну копію профілю (включно з копією об'єкта `permissions`).
