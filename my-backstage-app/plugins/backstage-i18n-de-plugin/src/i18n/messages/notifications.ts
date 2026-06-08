import { createTranslationMessages } from '@backstage/frontend-plugin-api';
import { notificationsTranslationRef } from '@backstage/plugin-notifications/alpha';

export const notificationsDe = createTranslationMessages({
  ref: notificationsTranslationRef,
  full: false,
  messages: {
    'notificationsPage.title': 'Benachrichtigungen',
    'notificationsPage.tableTitle.all_one':
      'Alle Benachrichtigungen ({{count}})',
    'notificationsPage.tableTitle.all_other':
      'Alle Benachrichtigungen ({{count}})',
    'notificationsPage.tableTitle.saved_one':
      'Gespeicherte Benachrichtigungen ({{count}})',
    'notificationsPage.tableTitle.saved_other':
      'Gespeicherte Benachrichtigungen ({{count}})',
    'notificationsPage.tableTitle.unread_one':
      'Ungelesene Benachrichtigungen ({{count}})',
    'notificationsPage.tableTitle.unread_other':
      'Ungelesene Benachrichtigungen ({{count}})',
    'notificationsPage.tableTitle.read_one':
      'Gelesene Benachrichtigungen ({{count}})',
    'notificationsPage.tableTitle.read_other':
      'Gelesene Benachrichtigungen ({{count}})',
    'filters.title': 'Filter',
    'filters.view.label': 'Ansicht',
    'filters.view.unread': 'Ungelesene Benachrichtigungen',
    'filters.view.read': 'Gelesene Benachrichtigungen',
    'filters.view.saved': 'Gespeichert',
    'filters.view.all': 'Alle',
    'filters.createdAfter.label': 'Gesendet',
    'filters.createdAfter.placeholder': 'Benachrichtigungen seit',
    'filters.createdAfter.last24h': 'Letzte 24 h',
    'filters.createdAfter.lastWeek': 'Letzte Woche',
    'filters.createdAfter.anyTime': 'Jederzeit',
    'filters.sortBy.label': 'Sortieren nach',
    'filters.sortBy.placeholder': 'Sortierfeld',
    'filters.sortBy.newest': 'Neueste zuerst',
    'filters.sortBy.oldest': 'Älteste zuerst',
    'filters.sortBy.topic': 'Thema',
    'filters.sortBy.origin': 'Quelle',
    'filters.severity.label': 'Mindest-Priorität',
    'filters.severity.critical': 'Kritisch',
    'filters.severity.high': 'Hoch',
    'filters.severity.normal': 'Normal',
    'filters.severity.low': 'Niedrig',
    'filters.topic.label': 'Thema',
    'filters.topic.anyTopic': 'Beliebiges Thema',
    'table.emptyMessage': 'Keine Einträge vorhanden',
    'table.pagination.firstTooltip': 'Erste Seite',
    'table.pagination.labelDisplayedRows': '{from}-{to} von {count}',
    'table.pagination.labelRowsSelect': 'Zeilen',
    'table.pagination.lastTooltip': 'Letzte Seite',
    'table.pagination.nextTooltip': 'Nächste Seite',
    'table.pagination.previousTooltip': 'Vorherige Seite',
    'table.bulkActions.markAllRead': 'Alle als gelesen markieren',
    'table.bulkActions.markSelectedAsRead':
      'Ausgewählte als gelesen markieren',
    'table.bulkActions.returnSelectedAmongUnread':
      'Ausgewählte wieder auf ungelesen setzen',
    'table.bulkActions.saveSelectedForLater':
      'Ausgewählte für später speichern',
    'table.bulkActions.undoSaveForSelected':
      'Speichern der ausgewählten rückgängig machen',
    'table.confirmDialog.title': 'Sind Sie sicher?',
    'table.confirmDialog.markAllReadDescription':
      'Alle Benachrichtigungen als gelesen markieren.',
    'table.confirmDialog.markAllReadConfirmation': 'Alle markieren',
    'table.confirmDialog.cancel': 'Abbrechen',
    'table.errors.markAllReadFailed':
      'Alle Benachrichtigungen konnten nicht als gelesen markiert werden',
    'sidebar.title': 'Benachrichtigungen',
    'sidebar.errors.markAsReadFailed':
      'Benachrichtigung konnte nicht als gelesen markiert werden',
    'sidebar.errors.fetchNotificationFailed':
      'Benachrichtigung konnte nicht geladen werden',
    'settings.title': 'Benachrichtigungseinstellungen',
    'settings.errorTitle':
      'Einstellungen konnten nicht geladen werden',
    'settings.noSettingsAvailable':
      'Keine Benachrichtigungseinstellungen verfügbar, versuchen Sie es später erneut',
    'settings.table.origin': 'Quelle',
    'settings.table.topic': 'Thema',
    'settings.errors.useNotificationFormat':
      'useNotificationFormat muss innerhalb eines NotificationFormatProvider verwendet werden',
  },
});
